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
  <!-- <div *ngIf="firstNameSignal()">{{ firstNameSignal() }} is a great name!</div> -->
</form>

<br />
<br />
<br />
<h2>Press button</h2>
<button (click)="Connect()">Connect</button>
