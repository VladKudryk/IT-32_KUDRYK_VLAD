import { Component } from '@angular/core';
import { CourseFormComponent } from './course-form/course-form';

@Component({
  selector: 'app-root',
  imports: [CourseFormComponent],
  template: '<app-course-form></app-course-form>',
})
export class App {}