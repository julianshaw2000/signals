import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Property } from './property';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter, of, switchMap, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private url = 'http://localhost:3001/propertys';

  http = inject(HttpClient);

  private propertys$ = this.http.get<Property[]>(this.url);

  propertys = toSignal<Property[], Property[]>(this.propertys$, { initialValue: [] });

  private propertySelectedSubject = new BehaviorSubject<number>(0);

  private selectedProperty$ = this.propertySelectedSubject.pipe(
    filter(Boolean),
    tap((data: any) => console.log('selectedVehicle:>>>>>', data)),

    switchMap(propertyId =>
      !!propertyId ? this.http.get<Property>(`${this.url}?id=${propertyId}`) : of(null)
    )
  )


  selectedProperty = toSignal<Property | null>(this.selectedProperty$);



  propertySelected(propertyId: number) {
    this.propertySelectedSubject.next(propertyId);
  };


}

