import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jeu',
  imports: [CommonModule, FormsModule],
  templateUrl: './jeu.html',
  styleUrls: ['./jeu.css'],
})

export class Jeu {
  nombreSecret: number = Math.floor(Math.random() * 20) + 1;
  nombreSaisi: number | null = null;
  compteurTentatives: number = 0;
  maxTentatives: number = 5;
  message: string = '';
  jeuTermine: boolean = false;
  messageClass: string = '';

  verifierNombre(): void {
    if (this.nombreSaisi === null) {
      this.message = 'Veuillez entrer un nombre!';
      this.messageClass = 'warning';
      return;
    }

    this.compteurTentatives++;

    if (this.nombreSaisi > this.nombreSecret) {
      this.message = 'Le nombre saisi est supérieur au nombre secret!!!';
      this.messageClass = 'incorrect';
    } else if (this.nombreSaisi < this.nombreSecret) {
      this.message = 'Le nombre saisi est inférieur au nombre secret!!!';
      this.messageClass = 'incorrect';
    } else {
      this.message = 'Bravo vous avez gagné!!!!';
      this.messageClass = 'correct';
      this.jeuTermine = true;
    }

    if (this.compteurTentatives >= this.maxTentatives && !this.jeuTermine) {
      this.message = `Jeu terminé! Le nombre secret était ${this.nombreSecret}`;
      this.messageClass = 'gameover';
      this.jeuTermine = true;
    }

    this.nombreSaisi = null;
  }

  recommencer(): void {
    this.nombreSecret = Math.floor(Math.random() * 20) + 1;
    this.nombreSaisi = null;
    this.compteurTentatives = 0;
    this.message = '';
    this.jeuTermine = false;
    this.messageClass = '';
  }
}
