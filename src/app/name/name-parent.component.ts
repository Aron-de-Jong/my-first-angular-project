import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2>Master controls {{ names.length }} names</h2>

  <app-name-child 
    *ngFor="let name of names"
    [name]="name"
  ></app-name-child>
  <p>end</p>
  `
})
export class NameParentComponent {
  names = [
    "Barend",  "", "Eggie", "Thomas"
  ]
}
