import {
  afterNextRender,
  Component,
  ElementRef,
  HostListener,
  viewChild,
} from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  tiles = viewChild<ElementRef<HTMLImageElement>>('tiles');
  private move!: (value: number) => void;

  constructor() {
    afterNextRender(() => {
      const tiles = this.tiles()?.nativeElement;
      if (!tiles) return;

      this.move = gsap.quickTo(tiles, 'y', {
        duration: 0.5,
        ease: 'power3.out',
      });
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.move?.(-window.scrollY * .2);
  }
}
