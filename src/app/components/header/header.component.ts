import { Component } from '@angular/core';
import { NavOptionsComponent } from "../nav-options/nav-options.component";
import { NavigationEnd, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavOptionsComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentTheme: string | null = 'light';
  showOptions: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let theme = localStorage.getItem('currentTheme');
    this.currentTheme = theme || 'light';
    this.checkRoutesNotFound();
  }

  private checkRoutesNotFound() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeExists = this.router.config.some(route =>
          `/${route.path}` === event.url
        );
        this.showOptions = routeExists;
      }
    });
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
