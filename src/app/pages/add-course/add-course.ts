import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../services/course';


@Component({
  selector: 'app-add-course',
  imports: [FormsModule, NgIf],
  template: `
    <h2>Додати курс</h2>
    <form #itemForm="ngForm" (ngSubmit)="addItem(itemForm)">

      <div>
        <label>Назва курсу</label><br>
        <input name="title" [(ngModel)]="title" #titleRef="ngModel"
               required minlength="3" maxlength="50">
        <div *ngIf="submitted && titleRef.invalid">
          <small *ngIf="titleRef.errors?.['required']">Назва курсу обов'язкова</small>
          <small *ngIf="titleRef.errors?.['minlength']">Назва: мінімум 3 символи</small>
          <small *ngIf="titleRef.errors?.['maxlength']">Назва: максимум 50 символів</small>
        </div>
      </div>

      <div>
        <label>Викладач</label><br>
        <input name="teacher" [(ngModel)]="teacher" #teacherRef="ngModel"
               required minlength="3" maxlength="50">
        <div *ngIf="submitted && teacherRef.invalid">
          <small *ngIf="teacherRef.errors?.['required']">Викладач обов'язковий</small>
          <small *ngIf="teacherRef.errors?.['minlength']">Викладач: мінімум 3 символи</small>
          <small *ngIf="teacherRef.errors?.['maxlength']">Викладач: максимум 50 символів</small>
        </div>
      </div>

      <div>
        <label>Опис</label><br>
        <textarea name="description" [(ngModel)]="description" #descRef="ngModel"
                  required minlength="10"></textarea>
        <div *ngIf="submitted && descRef.invalid">
          <small *ngIf="descRef.errors?.['required']">Опис обов'язковий</small>
          <small *ngIf="descRef.errors?.['minlength']">Опис: мінімум 10 символів</small>
        </div>
      </div>

      <button type="submit">Додати</button>
    </form>
  `,
})
export class AddCourseComponent {
  title = '';
  teacher = '';
  description = '';
  submitted = false;

  constructor(private courseService: CourseService) {}

  addItem(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    this.courseService.addItem({
      title: this.title,
      teacher: this.teacher,
      description: this.description,
    });
    form.resetForm();
    this.submitted = false;
  }
}