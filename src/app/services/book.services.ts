import { Injectable, signal } from '@angular/core';

export interface Book {
    id: number;
    title: string;
    author: string;
    pages: number;
}

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private books = signal<Book[]>([
        { id: 1, title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
        { id: 2, title: '1984', author: 'Джордж Орвелл', pages: 320 },
        { id: 3, title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 300 }
    ]);

    getBooks() {
        return this.books;
    }

    addBook(title: string, author: string, pages: number) {
        this.books.update(books => {
            return [
                ...books,
                { id: Date.now(), title, author, pages }
            ];
        });
    }

    removeBook(id: number) {
        this.books.update(books => books.filter(b => b.id !== id));
    }
}