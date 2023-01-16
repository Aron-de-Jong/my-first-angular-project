import { Input, Component } from '@angular/core';
//import { Hero} from '../Hero'
//import { products } from '../products';
import { Hero } from '../heros';

@Component({
  selector: 'app-hero-child',
  template: `
  <h3> Says {{ hero.name }}</h3>
  <p>I, {{ hero.name }} am at your service, {{ masterName }}</p>
  `,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  @Input("master") masterName = ''
}
