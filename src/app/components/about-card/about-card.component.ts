import { Component } from '@angular/core';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css',
})
export class AboutCardComponent {
  cards = [
    {
      id: 1,
      img: 'assets/img/card-1.png',
      title: 'Производство',
      description:
        'Повседневная практика показывает, что укрепление и развитие внутренней структуры представляет собой интересный эксперимент проверки своевременного выполнения сверхзадачи.',
    },
    {
      id: 2,
      img: 'assets/img/card-2.png',
      title: 'Интеллект',
      description:
        'Повседневная практика показывает, что укрепление и развитие внутренней структуры представляет собой интересный эксперимент проверки своевременного выполнения сверхзадачи.',
    },
    {
      id: 3,
      img: 'assets/img/card-3.png',
      title: 'Сервис  ',
      description:
        'Повседневная практика показывает, что укрепление и развитие внутренней структуры представляет собой интересный эксперимент проверки своевременного выполнения сверхзадачи.',
    },
  ];
}
