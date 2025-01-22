import { Component } from '@angular/core';
import { NavOptionsComponent } from "../nav-options/nav-options.component";

@Component({
  selector: 'app-header',
  imports: [NavOptionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentTheme: string | null = 'dark';

  ngOnInit(): void {
    let theme = localStorage.getItem('currentTheme');
    this.currentTheme = theme || 'dark';
  }

  switchTheme(theme: string) {
    this.currentTheme = theme || 'dark';
    localStorage.setItem('currentTheme', this.currentTheme);
    document.body.classList.toggle('dark-theme', theme === 'light');
  }

  selectOption(option: string) {
    localStorage.setItem('selectedOption', option);
  }
}
