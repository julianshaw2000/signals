import { Component, inject } from '@angular/core';
import { PropertyService } from './property/property.service';
import { Owner } from './owner';

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

  onSelectionChange(selectedId: number) {
    this.propertyService.ownerSelected(selectedId);
  }

  propertySelected(id: number) {
    this.propertyService.propertySelected(id);
  }

}
