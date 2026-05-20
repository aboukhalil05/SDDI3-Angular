import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { EtudiantList } from './etudiant-list';

@Component({
  selector: 'app-gestion-des-etudiants',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EtudiantList],
  templateUrl: './gestion-des-etudiants.html',
  styleUrls: ['./gestion-des-etudiants.css']
})
export class GestionDesEtudiants {
  etudiantForm: FormGroup;
  etudiants: Array<{
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;
    telephone: string;
  }> = [];

  showListe = false;
  formSaved = false;

  constructor(private fb: FormBuilder) {
    this.etudiantForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(5)]],
      prenom: ['', [Validators.required, Validators.maxLength(10)]],
      dateNaissance: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]]
    });
  }

  get f() {
    return this.etudiantForm.controls;
  }

  get nom() {
    return this.etudiantForm.get('nom');
  }

  get prenom() {
    return this.etudiantForm.get('prenom');
  }

  get dateNaissance() {
    return this.etudiantForm.get('dateNaissance');
  }

  get email() {
    return this.etudiantForm.get('email');
  }

  get telephone() {
    return this.etudiantForm.get('telephone');
  }

  sauvegarder(): void {
    if (this.etudiantForm.valid) {
      this.etudiants.push(this.etudiantForm.value);
      this.formSaved = true;
      this.showListe = false;
      this.etudiantForm.markAsPristine();
      this.etudiantForm.markAsUntouched();
    } else {
      this.formSaved = false;
      this.etudiantForm.markAllAsTouched();
    }
  }

  annuler(): void {
    this.etudiantForm.reset();
    this.formSaved = false;
    this.showListe = false;
  }

  lister(): void {
    this.showListe = true;
    this.formSaved = false;
  }
}
