import { Component } from '@angular/core';
import { NavOptionsComponent } from "../nav-options/nav-options.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NavOptionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  temaActual: string | null = 'dark';

  ngOnInit(): void {
    let theme = localStorage.getItem('currentTheme');
    this.temaActual = theme;
  }

  cambiarTema(tema: string) {
    this.temaActual = tema;
    localStorage.setItem('currentTheme', this.temaActual);
    document.body.classList.toggle('tema-oscuro', tema === 'light');
  }

  selectOption(option: string) {
    localStorage.setItem('selectedOption', option);
  }
}
