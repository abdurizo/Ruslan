import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  viewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  well = viewChild<ElementRef<HTMLImageElement>>('well');

  private move!: (value: number) => void;
 
  private readonly speed = 0.2;
  private rotate!: (value: number) => void;

  constructor() {
    afterNextRender(() => {
      const well = this.well()?.nativeElement;
      if (!well) return;

      gsap.to(well, {
        x: 300, // едет влево
        rotation: 70, // два полных оборота
        ease: 'none',

        scrollTrigger: {
          trigger: well,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const offset = Math.min(window.scrollY * this.speed);
  }
}
