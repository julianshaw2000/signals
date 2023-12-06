import { Directive, inject, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormDirective<T> {
  public readonly ngForm = inject(NgForm, { self: true });
  @Output() public readonly formValueChange = this.ngForm.form.valueChanges;
}
