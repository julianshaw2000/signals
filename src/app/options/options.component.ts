import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { PropertyService } from '../property/property.service';
// import { PropertyService } from '../property.service';
// import { Property } from '../../../_models/property';

@Component({

  selector: 'app-options',
  template: `

  <p> options output </p>

    {{selectedProperty()?.title}}
    <br>


 <p> options input </p>

  <input #titleControl="ngModel"    [ngModel]="title()"
   (ngModelChange)="title.set($event)" required>
 <br>

  <input #subTitleControl="ngModel"
      [ngModel]="subTitle()"
      (ngModelChange)="subTitle.set($event)"
       required>

   <span *ngIf="subTitleControl.hasError('required')"> Field Required</span>
   <br>
  <!-- <input #subTitleField [value]="subTitle()" (input)="subTitle.set(subTitleField.value)" > -->
  {{fullName()}}
  `,
})
export class OptionsComponent implements OnInit {


  title = signal('');
  subTitle = signal('');

  fullName = computed(() => this.title() + ' ' + this.subTitle());

  selectedProperty = this.propertyService.selectedProperty;

  constructor(
    public propertyService: PropertyService
  ) {

    this.selectedProperty = this.propertyService.selectedProperty;
  }

  ngOnInit(): void {

    // this value does not get assigned here
    this.title.set(this.selectedProperty()?.title);
    this.subTitle.set('Shaw');
  }
}
