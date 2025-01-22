import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-options',
  imports: [RouterLink],
  templateUrl: './nav-options.component.html',
  styleUrl: './nav-options.component.scss'
})
export class NavOptionsComponent {
  selectedOption: string = 'home'; // Opción seleccionada por defecto

  ngOnInit(): void {
    this.selectedOption = localStorage.getItem('selectedOption') || 'home';
  }

  selectOption(option: string) {
    this.selectedOption = option;
    localStorage.setItem('selectedOption', option);
  }
}
