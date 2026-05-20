import { Injectable } from '@angular/core';

export interface Etudiant {
  nom: string;
  age: number | string;
  ville: string;
}

@Injectable({ providedIn: 'root' })
export class EtudiantsService {
  private data: Etudiant[] = [
    { nom: 'Alice', age: 21, ville: 'Tunis' },
    { nom: 'Bob', age: 22, ville: 'Sfax' }
  ];

  getEtudiantData(): Etudiant[] {
    return this.data;
  }

  ajouterEtudiantData(e: Etudiant): void {
    // create a shallow copy to avoid external mutation
    this.data.push({ ...e });
  }

  clear(): void {
    this.data = [];
  }
}
