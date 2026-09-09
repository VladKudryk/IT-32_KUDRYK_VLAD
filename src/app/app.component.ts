import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface Book {
    title: string;
    author: string;
    pages: number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    books: Book[] = [
        { title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
        { title: '1984', author: 'Джордж Орвелл', pages: 328 },
        { title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 310 }
    ];

    newTitle = '';
    newAuthor = '';
    newPages: number | null = null;

    addBook() {
        if (!this.newTitle || !this.newAuthor || !this.newPages) {
            return;
        }
        this.books.push({
            title: this.newTitle,
            author: this.newAuthor,
            pages: this.newPages
        });
        this.newTitle = '';
        this.newAuthor = '';
        this.newPages = null;
    }

    removeBook(index: number) {
        this.books.splice(index, 1);
    }
}