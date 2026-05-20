import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant-list.html',
  styleUrls: ['./etudiant-list.css']
})
export class EtudiantList {
  @Input() etudiants: Array<{
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;
    telephone: string;
  }> = [];
}
