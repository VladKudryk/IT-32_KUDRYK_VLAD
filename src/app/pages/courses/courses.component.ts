import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Список курсів</h1>
    <div *ngFor="let course of courses">
      <h2>{{ course.title }}</h2>
      <p>Викладач: {{ course.teacher }}</p>
      <a [routerLink]="['/course', course.id]">Переглянути курс</a>
    </div>
  `
})
export class CoursesComponent {
  courses = [
    { id: 1, title: 'HTML та CSS', teacher: 'Олександр', duration: 20 },
    { id: 2, title: 'JavaScript', teacher: 'Марія', duration: 30 },
    { id: 3, title: 'Angular', teacher: 'Іван', duration: 25 },
  ];
}