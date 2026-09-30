import { Component, input } from '@angular/core';
import { TechnologyCardInterface } from '../../model/technologyCard';

@Component({
  selector: 'app-card-technology',
  standalone: true,
  imports: [],
  templateUrl: './card-technology.component.html',
  styleUrl: './card-technology.component.css'
})
export class CardTechnologyComponent {
card=input.required<TechnologyCardInterface>()
}
