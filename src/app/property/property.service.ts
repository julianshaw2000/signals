import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
// import { Photo, Property } from './property';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, map, of, switchMap } from 'rxjs';
import { Property } from './property';
import { Photo } from '../photo';


@Injectable({
  providedIn: 'root'
})


export class PropertyService {

  private url = 'http://localhost:3001';

  http = inject(HttpClient);

  // pp:WritableSignal(<Photo[]>{ data: [] });
  // translations: WritableSignal<{ data: {} }> = signal({ data: [] });


  private ownerSelectedSubject = new BehaviorSubject<number>(0);
  private propertySelectedSubject = new BehaviorSubject<number>(0);

  private selectOwnerPropertys$ = this.ownerSelectedSubject.pipe(
    switchMap(ownerId =>
      !!ownerId
        ? this.http.get<Property[]>(`${this.url}/propertys/?ownerId=${ownerId}`)
        //  .pipe(user =>  console.log(user))
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

  writablePhotos = signal<Photo[]>([]);


  propertySelected(propertyId: number) {
    this.propertySelectedSubject.next(propertyId);
  };


  ownerSelected(userId: number) {
    this.ownerSelectedSubject.next(userId);
  };

  defaultPhoto(photoIn: Photo) {
    this.writablePhotos.update(photos =>
      photos.map(photo => photo.id === photoIn.id ?
        { ...photo, isDefault: true } : { ...photo, isDefault: false }))
  }

  removePhoto(photoIn: Photo) {
    this.writablePhotos.update(photos =>
      photos.filter(photo => photo.id !== photoIn.id))
  }

  saveAll(propValue: any): boolean {

    if (this.writablePhotos().length === 0) {
      console.log('no photo to save');
      return false;
    }

    let ownerId = propValue.ownerId;
    let propertyId = propValue.id || 0;
    let photos = JSON.stringify(this.writablePhotos());
    let property = JSON.stringify(propValue)

    let data = {
      "ownerId": ownerId,
      "propertyId": propertyId,
      "property": property,
      "photos": photos
    };

    console.log(data);
    return true;
  }
}

