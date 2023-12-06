<h1>Simple Template-driven Purchase form</h1>
<form 
  (formValueChange)="formValue.set($event)"
  (ngSubmit)="submit()"
>
  <div>
    <label>
      <span>First name</span>
      <input
        type="text"
        [ngModel]="vm.formValue.firstName"
        name="firstName"
      />
    </label>
  </div>
  <div>
    <label>
      <span>Last name</span>
      <input
        type="text"
        [ngModel]="vm.formValue.lastName"
        name="lastName"
      />
    </label>
  </div>
  <div>
    <label>
      <span>Age</span>
      <input type="number" [ngModel]="vm.formValue.age" name="age" />
    </label>
  </div>
  <div>
    <label>
      <span>Emergency contact</span>
      <input
        type="text"
        [ngModel]="vm.formValue.emergencyContactNumber"
        name="emergencyContactNumber"
        [disabled]="vm.emergencyContactDisabled"
      />
    </label>
  </div>
  <div>
    <label>
      <span>Gender</span>
      Male
      <input
        type="radio"
        [ngModel]="vm.formValue.gender"
        name="gender"
        value="male"
      />
      Female
      <input
        type="radio"
        [ngModel]="vm.formValue.gender"
        name="gender"
        value="female"
      />
      Other
      <input
        type="radio"
        [ngModel]="vm.formValue.gender"
        name="gender"
        value="other"
      />
    </label>
  </div>
  <div>
    <label>
      <input
        type="text"
        class="other-gender"
        [ngModel]="vm.formValue.genderOther"
        name="genderOther"
        *ngIf="vm.showOtherGender"
      />
    </label>
  </div>
  <div ngModelGroup="addresses">
    <div ngModelGroup="billingAddress"> 
    </div>
    <label>
      <!-- <span>Shipping addresss is different from billing address</span>
      <input
        type="checkbox"
        name="shippingAddressDifferentFromBillingAddress"
        [ngModel]="
          vm.formValue.addresses?.shippingAddressDifferentFromBillingAddress
        "
      /> -->
    </label>
    <!-- <div
      ngModelGroup="shippingAddress"
      *ngIf="vm.showShippingAddress"
    >
      <h2>Shipping address</h2>
      <app-address-form [address]="vm.formValue.addresses?.shippingAddress">
      </app-address-form>
    </div> -->
  </div>
  <div class="buttons">
    <button type="submit">Submit</button>
  </div>
  <pre>
    {{ vm.formValue | json }}
  </pre>
</form>


<!-- 
<p>options works!</p>
<form [formGroup]="profileForm">
  <label>
    First Name:
    <input type="text" formControlName="title" />
  </label>
  <label>
    id:
    <input type="number" formControlName="id" />
  </label>
 </form>

<br />
<br />
<br />
<h2>Press button</h2>
<button (click)="Connect()">Connect</button> -->
