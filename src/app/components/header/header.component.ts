import { Component } from '@angular/core';
import { NavOptionsComponent } from "../nav-options/nav-options.component";

@Component({
  selector: 'app-header',
  imports: [NavOptionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentTheme: string | null = 'light';

  ngOnInit(): void {
    let theme = localStorage.getItem('currentTheme');
    this.currentTheme = theme || 'light';
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('currentTheme', this.currentTheme);
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }

  selectOption(option: string) {
    localStorage.setItem('selectedOption', option);
  }
}
