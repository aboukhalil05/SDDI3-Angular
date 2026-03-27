import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../entities/personne';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class Home {
  p: Personne = new Personne(1, "Mohammed", "Ali");

  dirbonjour(): string {
    return "Bonjour SDDI3";
  }

  tab: number[] = [2, 19, 24, 77, 6];
  moyenne: number[] = [0, 5, 7, 12, 15, 18, 20, 10];

  AfficheColor: boolean = false;

  changeColor(): void {
    this.AfficheColor = !this.AfficheColor;
  }

}
