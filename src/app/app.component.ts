import { Component } from '@angular/core';
import { Hero } from './heros'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myHero: Hero = {
    name: "Santiago"
  };
  masterName = "Aron";
}