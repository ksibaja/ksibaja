import { Component } from '@angular/core';
import { NavOptionsComponent } from "../nav-options/nav-options.component";

@Component({
  selector: 'app-header',
  imports: [NavOptionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  temaActual: string | null = 'dark';

  ngOnInit(): void {
    let theme = localStorage.getItem('currentTheme');
    this.temaActual = theme || 'dark';
  }

  cambiarTema(tema: string) {
    this.temaActual = tema || 'dark';
    localStorage.setItem('currentTheme', this.temaActual);
    document.body.classList.toggle('tema-oscuro', tema === 'light');
  }

  selectOption(option: string) {
    localStorage.setItem('selectedOption', option);
  }
}
