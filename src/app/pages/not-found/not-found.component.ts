import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-not-found',
  imports: [FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
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

  selectOption(option: string) {
    localStorage.setItem('selectedOption', option);
  }
}
