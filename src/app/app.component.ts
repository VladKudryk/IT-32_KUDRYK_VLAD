import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MoviesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-app';
}
