import {
  AfterRenderPhase, AfterViewChecked, AfterViewInit,
  Component, Input, OnInit, Signal, afterRender,
  computed, signal
} from '@angular/core';
import { PropertyService } from '../property/property.service';
import { BeachAccessType, Property } from '../property/property';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})

export class OptionsComponent implements OnInit {

  property: Property | null;

  propertyForm: FormGroup;
  selectedProperty = this.propertyService.selectedProperty;
  selectedProperty$ = toObservable(this.selectedProperty);


  constructor(
    public propertyService: PropertyService,
    private fb: FormBuilder) {

    this.setupFieldsGen({} as Property);
  }


  ngOnInit(): void {


    this.selectedProperty$.subscribe(property => {
      if (!!property) {
        this.property = property;

        this.setupFieldsGen(property)
      }
    });
  }




  setupFieldsGen(prop: Partial<Property>): void {
    this.propertyForm = this.fb.group({
      id: [prop.id, Validators.required],
      ownerId: [prop.ownerId, Validators.required],
      pricing: [prop.pricing],
      checkin: [prop.checkin, Validators.required],
      checkout: [prop.checkout, Validators.required],
      propertyType: [prop.propertyType],
      bed: [prop.bed],
      bedrooms: [prop.bedrooms],
      bathrooms: [prop.bathrooms],
      area: [prop.area, Validators.required],
      generalInfo: [prop.generalInfo],
      title: [prop.title, Validators.required],
      subTitle: [prop.subTitle],
      address: [prop.address, Validators.required],
      afterBookingAddress: [prop.afterBookingAddress],
      directions: [prop.directions],
      afterBookingDirections: [prop.afterBookingDirections],
      wifiDetails: [prop.wifiDetails],
      town: [prop.town, Validators.required],
      wifi: [prop.wifi],
      pool: [prop.pool],
      ac: [prop.ac],
      parking: [prop.parking],
      gym: [prop.gym],
      restaurant: [prop.restaurant],
      spa: [prop.spa],
      beachAccessType: [prop.beachAccessType]
    });
  }


  onSubmit() {
    if (this.propertyForm.valid) {
      // console.log('Form Data: ', this.propertyForm.value);
      this.saveAll()
    }
  }

  saveAll() {
    let isSaved = this.propertyService.saveAll(this.propertyForm.value);

    if (!isSaved) {
      console.log('Error saving form data')
    }

  }

}
