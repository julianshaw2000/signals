import { Component, OnInit, inject, signal } from '@angular/core';
import { PropertyService } from '../property/property.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit {

  photoList$ = toObservable(this.propertyService.selectedPhotos)

  constructor(public propertyService: PropertyService) { }

  ngOnInit(): void {
    this.photoList$.subscribe(photos => {
      this.propertyService.writablePhotos.set(this.propertyService.selectedPhotos());
    });
  }

  removeImage(photo: Photo) {
    this.propertyService.removePhoto(photo)
  }

  makeDefault(photo: Photo) {
    this.propertyService.defaultPhoto(photo);
  }

}
