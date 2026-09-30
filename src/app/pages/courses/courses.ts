import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService, Course } from '../../services/course';

@Component({
  selector: 'app-courses',
  imports: [NgFor, RouterLink],
  template: `
    <h2>Список курсів</h2>
    <div *ngFor="let course of courses">
      <h3>{{ course.title }}</h3>
      <p>{{ course.teacher }}</p>
      <a [routerLink]="['/course', course.id]">Детальніше</a>
      <hr>
    </div>
  `,
})
export class CoursesComponent {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getItems();
  }
}