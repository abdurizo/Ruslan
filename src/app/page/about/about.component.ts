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
  selector: 'app-about',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  robot = viewChild<ElementRef<HTMLImageElement>>('robots');

  private move!: (value: number) => void;
  private readonly startX = 320;
  private readonly speed = 0.2;

  constructor() {
    afterNextRender(() => {
      const robot = this.robot()?.nativeElement;
      if (!robot) return;

      this.move = gsap.quickTo(robot, 'x', {
        duration: 0.5,
        ease: 'power1.out',
      });
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const offset = Math.min(window.scrollY * this.speed, 320);

    this.move(this.startX - offset);
  }
}
