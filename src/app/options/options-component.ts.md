import { Component, OnInit, inject, signal, WritableSignal } from '@angular/core';
import { PropertyService } from '../property/property.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent implements OnInit {

  // propertyService = inject(PropertyService);
  selectedProperty = this.propertyService.selectedProperty;
  // firstNameSignal: WritableSignal<string> = signal<string>('');
  firstNameSignal = toSignal<any>;

  profileForm: FormGroup;
  // Represent the 'firstName' form control as a Signal

  constructor(private fb: FormBuilder,
    private propertyService: PropertyService) {
    this.profileForm = this.fb.group({
      title: ['me dat'],
      id: [4]
    });
    this.firstNameSignal = toSignal(this.profileForm.get('title').valueChanges,
      { initialValue: 'rass' });

  }

  ngOnInit(): void {
    // this.firstNameSignal = toSignal(this.profileForm.get('title').valueChanges, { initialValue: '' });
  }


}
