import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div *ngIf="course">
            <h1>{{ course.title }}</h1>
            <p>Викладач: {{ course.teacher }}</p>
            <p>Тривалість: {{ course.duration }} годин</p>
        </div>
        <div *ngIf="!course">
            <h1>Курс не знайдено</h1>
        </div>`
})
export class CourseDetailComponent {
    id!: number;
    course: any;

    courses = [
        { id: 1, title: 'HTML та CSS', teacher: 'Олександр', duration: 20 },
        { id: 2, title: 'JavaScript', teacher: 'Марія', duration: 30 },
        { id: 3, title: 'Angular', teacher: 'Іван', duration: 25 },
    ];

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
        this.id = Number(params['id']);
        this.course = this.courses.find(c => c.id === this.id);
        });
    }
}