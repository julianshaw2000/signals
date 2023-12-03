import { Component, inject } from '@angular/core';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {

  propertyService = inject(PropertyService);
  selectedProperty = this.propertyService.selectedProperty;

}
