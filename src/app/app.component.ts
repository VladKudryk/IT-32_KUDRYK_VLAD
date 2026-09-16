import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Головна</a>
      <a routerLink="/about">Про сайт</a>
      <a routerLink="/courses">Курси</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}