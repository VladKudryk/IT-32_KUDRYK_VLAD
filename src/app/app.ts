import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from './services/book.services';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
  books;

  newTitle = '';
  newAuthor = '';
  newPages: number | null = null;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  addBook() {
    if (this.newTitle || this.newAuthor || this.newPages !== null) {
      return;
    }

    this.bookService.addBook(this.newTitle, this.newAuthor, this.newPages!);
    this.newTitle = '';
    this.newAuthor = '';
    this.newPages = null;
  }

  removeBook(id: number) {
    this.bookService.removeBook(id);
  }
}