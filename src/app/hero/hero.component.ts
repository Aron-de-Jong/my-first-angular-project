import { Component } from '@angular/core';
import { Hero, HEROES } from '../hero'

@Component({
  selector: 'app-hero',
  template: `
  <h2>{{ master }} controls {{ heroes.length }} heroes</h2>

  <app-hero-child
    *ngFor="let hero of heroes"
    [hero]="hero"
    [master]="master"
  >
  </app-hero-child>
  `
})
export class HeroComponent {
  heroes = HEROES
  master = "Aron"

}
