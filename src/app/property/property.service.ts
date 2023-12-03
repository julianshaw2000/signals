import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Photo, Property } from './property';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private url = 'http://localhost:3001';

  http = inject(HttpClient);



  private ownerSelectedSubject = new BehaviorSubject<number>(0);
  private propertySelectedSubject = new BehaviorSubject<number>(0);

  private selectOwnerPropertys$ = this.ownerSelectedSubject.pipe(
    switchMap(ownerId =>
      !!ownerId
        ? this.http.get<Property[]>(`${this.url}/propertys/?ownerId=${ownerId}`)    //.pipe(map(user => user?.id))
        : of(null)
    )
  )

  private selectedProperty$ = this.propertySelectedSubject.pipe(
    switchMap(propertyId =>
      !!propertyId
        ? this.http.get<Property>(`${this.url}/propertys/${propertyId}`)
        : of(null)
    )
  )

  private selectedPhotos$ = this.propertySelectedSubject.pipe(
    switchMap(propertyId => !!propertyId
      ? this.http.get<Photo[]>(`${this.url}/photos?propertyId=${propertyId}`)
      : of(null)))


  selectedOwnerPropertys = toSignal<Property[] | null>(this.selectOwnerPropertys$);
  selectedProperty = toSignal<Property | null>(this.selectedProperty$);
  selectedPhotos = toSignal<Photo[] | null>(this.selectedPhotos$);



  propertySelected(propertyId: number) {
    this.propertySelectedSubject.next(propertyId);
  };


  ownerSelected(userId: number) {
    this.ownerSelectedSubject.next(userId);
  };



}

