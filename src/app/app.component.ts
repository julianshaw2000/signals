import { Component, Signal, inject } from '@angular/core';
import { PropertyService } from './property/property.service';
import { Owner } from './owner';
import { Property } from './property/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';

  propertyService = inject(PropertyService)

  propertys = this.propertyService.selectedOwnerPropertys;
  selectedProperty = this.propertyService.selectedProperty;

  selectedOwnerId: number;


  options: Owner[] = [
    { id: 1, name: 'Julian' },
    { id: 2, name: 'Judi' },
    { id: 3, name: 'Tony' },
  ];


  constructor() {
    this.selectedOwnerId = this.options[0].id; // Default selected option ID
  }

  onSelectionChange(ownerId: number) {
    this.propertyService.ownerSelected(ownerId);
    // if (this.propertyService.selectedOwnerPropertys().length > 0) {
    //   this.propertySelected(this.propertyService.selectedOwnerPropertys()[0].id)
    // }
  }

  propertySelected(id: number) {
    this.propertyService.propertySelected(id);
  }

}
