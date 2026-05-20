import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EtudiantsService } from '../etudiant.service';

@Component({
  selector: 'app-tpservice',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './tpservice.html',
  styleUrls: ['./tpservice.css']
})

export class Tpservice {

  public model: any = {};

  public esource: Array<any>;

  constructor(private eservice: EtudiantsService) {

    this.esource =
      this.eservice.getEtudiantData();
  }

  validate(): boolean {

    let status = true;

    if (
      typeof(this.model.nom) === "undefined"
      || this.model.nom === ""
    ) {

      alert('champ nom est vide');

      return false;
    }

    else if (
      typeof(this.model.age) === "undefined"
      || this.model.age === ""
    ) {

      alert('champ age est vide');

      return false;
    }

    else if (
      typeof(this.model.ville) === "undefined"
      || this.model.ville === ""
    ) {

      alert('champ ville est vide');

      return false;
    }

    return status;
  }

  reset(): void {
    this.model = {};
    // refresh local view of the service data (defensive copy)
    this.esource = this.eservice.getEtudiantData();
  }

  submit(): void {

    if (this.validate()) {

      this.eservice
        .ajouterEtudiantData(this.model);

      this.reset();
    }
  }
}