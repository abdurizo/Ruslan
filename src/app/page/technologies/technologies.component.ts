import { Component } from '@angular/core';
import { CardTechnologyComponent } from '../../components/card-technology/card-technology.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CardTechnologyComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  cards = [
    {
      id: 1,
      icon: 'assets/icon/robotics-icon-dark-1.jpg',
      title: 'Робототехника',
      description:
        'В рамках спецификации современных стандартов, независимые государства неоднозначны и будут подвергнуты целой серии независимых исследований.',
    },
    {
      id: 2,
      icon: 'assets/icon/robotics-icon-dark-2.jpg',
      title: 'Умные чипы',
      description:
        'В рамках спецификации современных стандартов, независимые государства неоднозначны и будут подвергнуты целой серии независимых исследований.',
    },
    {
      id: 3,
      icon: 'assets/icon/robotics-icon-dark-9.jpg',
      title: 'ИИ и безопасность',
      description:
        'В рамках спецификации современных стандартов, независимые государства неоднозначны и будут подвергнуты целой серии независимых исследований.',
    },
  ];
}
