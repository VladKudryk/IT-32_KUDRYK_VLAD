import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService, Course } from '../../services/course';

@Component({
  selector: 'app-course-detail',
  imports: [NgIf],
  template: `
    <div *ngIf="course">
      <h2>{{ course.title }}</h2>
      <p><b>Викладач:</b> {{ course.teacher }}</p>
      <p><b>Опис:</b> {{ course.description }}</p>
    </div>
    <p *ngIf="!course">Курс не знайдено</p>
  `,
})
export class CourseDetailComponent {
  id = 0;
  course?: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.course = this.courseService.getItemById(this.id);
    });
  }
}