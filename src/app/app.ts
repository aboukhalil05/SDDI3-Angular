import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Calculs } from "./calculs/calculs";
import { Jeu } from "./jeu/jeu";
import { FormsModule } from '@angular/forms';
import { PipesDemoComponent } from './pipes/pipes-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoangular');

public val: string = "";

  AfficherAlert() : void {
    alert('Hello, Angular!');
  }
};