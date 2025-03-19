import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
