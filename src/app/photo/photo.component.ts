import { Component, inject } from '@angular/core';
import { PropertyService } from '../property/property.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {

  propertyService = inject(PropertyService);

  photos = this.propertyService.selectedPhotos;
}
