import { AfterRenderPhase, AfterViewChecked, AfterViewInit, Component, OnInit, afterRender, computed, signal } from '@angular/core';
import { PropertyService } from '../property/property.service';
import { Property } from '../property/property';
import { PropertyModel } from '../property/property-model';
import { FormDirective } from '../form.directive'; 
@Component({
  selector: 'app-options',
  standalone: false, 
  templateUrl: './options.component.html',
})
export class OptionsComponent   {


  protected readonly formValue = signal<PropertyModel>({}) ;

  private readonly viewModel = computed(() => ({
    formValue: this.formValue(),
    // emergencyContactDisabled:
    //   this.formValue().age === 0 || this.formValue().age >= 18,
    // showOtherGender: this.formValue(). === 'other', 
  }));

  protected get vm() {
    return this.viewModel();
  }

  protected submit(): void {
    console.log(this.formValue());
  }

}













//   subTitle = signal<string | null>('');

//   fullName = computed(() => this.title() + ' ' + this.subTitle());

//   selectedProperty = this.propertyService.selectedProperty;
//   title = signal<string | null>('');

//   constructor(
//     public propertyService: PropertyService
//   ) {

//     this.selectedProperty = this.propertyService.selectedProperty;

    

//   }
//   ngAfterViewInit(): void {
//     this.title.set(this.propertyService.selectedProperty()?.title);
//   }

//   onSetTitle(value: string) {
//     console.log(' >>>', value)
//     this.title.set(value);
//   }

//   ngOnInit(): void {
//     this.title.set(this.propertyService.selectedProperty()?.title);


//     this.subTitle.set('Shaw');
//   }


// }
