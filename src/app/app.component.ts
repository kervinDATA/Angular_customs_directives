import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './background.directive'
import { ShowMoviesDirective } from './show-movies.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BackgroundDirective, ShowMoviesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Les directives';
  title2 = 'Bonjour !';

  isAdmin = true;
  showMovies = true;

  view () {

  }

  edit () {

  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  toggleMovies() {
    this.showMovies = !this.showMovies;
  }

}
