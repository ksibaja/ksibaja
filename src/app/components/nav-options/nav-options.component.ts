import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-options',
  imports: [RouterLink],
  templateUrl: './nav-options.component.html',
  styleUrl: './nav-options.component.scss'
})
export class NavOptionsComponent {
  selectedOption: string = 'home'; // Selected option by default

  ngOnInit(): void {
    this.selectedOption = localStorage.getItem('selectedOption') || 'home';
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.selectedOption = localStorage.getItem('selectedOption') || 'home';
  }

  selectOption(option: string) {
    this.selectedOption = option;
    localStorage.setItem('selectedOption', option);
  }
}
