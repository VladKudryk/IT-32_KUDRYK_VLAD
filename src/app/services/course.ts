import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  teacher: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Angular', teacher: 'Іван Петренко', description: 'Основи створення Angular-застосунків' },
    { id: 2, title: 'JavaScript', teacher: 'Олена Коваль', description: 'Сучасний JavaScript з нуля' },
    { id: 3, title: 'TypeScript', teacher: 'Андрій Мельник', description: 'Типізація в JavaScript-проєктах' },
  ];

  getItems(): Course[] {
    return this.courses;
  }

  getItemById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addItem(item: { title: string; teacher: string; description: string }): void {
    const lastId = this.courses.length ? this.courses[this.courses.length - 1].id : 0;
    this.courses.push({ id: lastId + 1, ...item });
  }
}