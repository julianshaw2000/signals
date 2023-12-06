import { AfterRenderPhase, AfterViewChecked, AfterViewInit, Component, Input, OnInit, Signal, afterRender, computed, signal } from '@angular/core';
import { PropertyService } from '../property/property.service';
import { Property } from '../property/property';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({

  selector: 'app-options',
  template: `

  <p> options output </p>

   OUTPUT >>> {{title()}}
    <br>
    <p> {{propSignal | json}}


 <p> options input </p>

  <input #titleControl="ngModel"    [ngModel]="title()"
   (ngModelChange)="onSetTitle($event)" required>
 <br>

  <input #subTitleControl="ngModel"
      [ngModel]="subTitle()"
      (ngModelChange)="subTitle.set($event)"
       required>

   <span *ngIf="titleControl.hasError('required')"> Field Required</span>
   <br>
  {{this.selectedProperty()?.title}}
  <br>
{{fullName()}}  <span> test</span>

<p> selected property </p>
{{property|json}}
  `,
})
export class OptionsComponent implements OnInit {
  @Input() propSignal: Property | null;

  property: Property | null;

  subTitle = signal<string | null>('');

  fullName = computed(() => this.title() + ' ' + this.subTitle());

  selectedProperty = this.propertyService.selectedProperty;
  selectedProperty$ = toObservable(this.selectedProperty);

  title = signal<string | null>('');

  constructor(
    public propertyService: PropertyService
  ) {

    this.selectedProperty = this.propertyService.selectedProperty;

    // afterRender(() => {
    //   if (!!this.propertyService.selectedProperty()) {

    //     this.title.set(this.propertyService.selectedProperty()?.title);
    //   }
    // },);

  }

  onSetTitle(value: string) {
    console.log(' >>>', value)
    this.title.set(value);
  }

  ngOnInit(): void {
    this.title.set(this.propertyService.selectedProperty()?.title);

    this.selectedProperty$.subscribe(property => {
      if (!!property) {
        this.property = property;
      }
    });


    this.subTitle.set('Shaw');
  }


}
