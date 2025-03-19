import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-hobbies',
  imports: [CarouselComponent, FooterComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  ngAfterViewInit(): void {
    this.adjustContentHeight();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.adjustContentHeight();
  }

  private adjustContentHeight(): void {
    const header = document.getElementById('header') as HTMLElement;
    const main = document.getElementById('main-container') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;
    main.style.minHeight = `calc(100dvh - ${headerHeight}px)`;
  }
}
