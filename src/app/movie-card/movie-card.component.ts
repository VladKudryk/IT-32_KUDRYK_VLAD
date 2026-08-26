import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() title!: string;
  @Input() genre!: string;
  @Input() year!: number;
  @Input() rating!: number;

  @Output() addedToFavorites = new EventEmitter<string>();

  onAddClick(): void {
    this.addedToFavorites.emit(this.title);
  }
}
