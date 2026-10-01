import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  imports: [FormsModule, NgIf, NgFor],
  template: `
    <h2>Додати курс</h2>
    <form #itemForm="ngForm" (ngSubmit)="addItem(itemForm)">

      <div>
        <label>Назва курсу</label><br>
        <input type="text" name="title" [(ngModel)]="newItem.title"
               required minlength="3" maxlength="50" #titleRef="ngModel">
        <div *ngIf="submitted && titleRef.invalid">
          <small *ngIf="titleRef.errors?.['required']">Назва курсу обов'язкова</small>
          <small *ngIf="titleRef.errors?.['minlength']">Назва повинна містити мінімум 3 символи</small>
          <small *ngIf="titleRef.errors?.['maxlength']">Назва повинна містити максимум 50 символів</small>
        </div>
      </div>

      <div>
        <label>Викладач</label><br>
        <input type="text" name="teacher" [(ngModel)]="newItem.teacher"
               required minlength="3" maxlength="50" #teacherRef="ngModel">
        <div *ngIf="submitted && teacherRef.invalid">
          <small *ngIf="teacherRef.errors?.['required']">Вкажіть викладача</small>
          <small *ngIf="teacherRef.errors?.['minlength']">Ім'я викладача повинно містити мінімум 3 символи</small>
          <small *ngIf="teacherRef.errors?.['maxlength']">Ім'я викладача повинно містити максимум 50 символів</small>
        </div>
      </div>

      <div>
        <label>Опис курсу</label><br>
        <textarea name="description" [(ngModel)]="newItem.description"
                  required minlength="10" maxlength="200" #descRef="ngModel"></textarea>
        <div *ngIf="submitted && descRef.invalid">
          <small *ngIf="descRef.errors?.['required']">Опис обов'язковий</small>
          <small *ngIf="descRef.errors?.['minlength']">Опис повинен містити мінімум 10 символів</small>
          <small *ngIf="descRef.errors?.['maxlength']">Опис повинен містити максимум 200 символів</small>
        </div>
      </div>

      <button type="submit">Додати курс</button>
    </form>

    <hr>
    <div *ngFor="let course of courses">
      <h3>{{ course.title }}</h3>
      <p>Викладач: {{ course.teacher }}</p>
      <p>Опис: {{ course.description }}</p>
    </div>
  `,
})
export class CourseFormComponent {
  newItem = {
    title: '',
    teacher: '',
    description: '',
  };

  courses: { title: string; teacher: string; description: string }[] = [];
  submitted = false;

  addItem(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.courses.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}