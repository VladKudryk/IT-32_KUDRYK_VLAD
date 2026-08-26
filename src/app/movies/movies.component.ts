import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

interface Movie {
  title: string;
  genre: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] = [
    { title: 'Interstellar', genre: 'Фантастика', year: 2014, rating: 8.7 },
    { title: 'Форсаж', genre: 'Бойовик', year: 2010, rating: 8.8 },
    { title: 'Матриця', genre: 'Фантастика', year: 1999, rating: 8.7 },
    { title: 'Джокер', genre: 'Драма', year: 2019, rating: 8.4 }
  ];

  favoriteMessage = '';

  onAddedToFavorites(movieTitle: string): void {
    this.favoriteMessage = `Фільм "${movieTitle}" додано в обране`;
  }
}
