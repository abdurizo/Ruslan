import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './page/hero/hero.component';
import { TechnologiesComponent } from './page/technologies/technologies.component';
import { AboutComponent } from './page/about/about.component';
import { EducationComponent } from './page/education/education.component';
import { ServicesComponent } from './page/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './page/start/start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    TechnologiesComponent,
    AboutComponent,
    EducationComponent,
    ServicesComponent,
    StartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forRuslan';
}
