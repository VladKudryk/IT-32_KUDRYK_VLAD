import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Навчальні курси</h1>
    <p>Цей застосунок дозволяє переглядати список курсів та детальну інформацію про кожен із них.</p>
  `
})
export class HomeComponent {}