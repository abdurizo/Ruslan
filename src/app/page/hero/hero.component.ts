import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  viewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  robot = viewChild<ElementRef<HTMLImageElement>>('robot');

  private move!: (value: number) => void;

  constructor() {
    afterNextRender(() => {
      const robot = this.robot()?.nativeElement;
      if (!robot) return;

      this.move = gsap.quickTo(robot, 'y', {
        duration: 0.5,
        ease: 'power3.out',
      });
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.move?.(-window.scrollY * .5);
  }
}
