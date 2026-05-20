import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './forms.html',
  styleUrl: './forms.css'
})

export class Forms {

  formData: any = {};
  affichageMessage: boolean = false;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl('', [
    Validators.required,
    this.hasExclamationMark
  ]);

  loginForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      username: this.username,
      password: this.password
    });
  }

  enregistrerUtilisateur() {

    this.formData = this.loginForm.value;

    this.affichageMessage = true;
  }

  hasExclamationMark(input: AbstractControl) {

    const value = input.value || '';

    const hasExclamation =
      value.indexOf('!') >= 0;

    return hasExclamation
      ? null
      : { needsExclamation: true };
  }
}