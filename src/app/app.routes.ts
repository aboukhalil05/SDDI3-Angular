import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculs } from './calculs/calculs';
import { Jeu } from './jeu/jeu';
import { PipesDemoComponent } from './pipes/pipes-demo';
import { Weather } from './weather/weather';
import { Forms } from './forms/forms';
import { GestionDesEtudiants } from './gestion-des-etudiants/gestion-des-etudiants';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'calculs', component: Calculs },
    { path: 'jeu', component: Jeu },
    { path: 'weather', component: Weather },
    { path: 'pipes', component: PipesDemoComponent },
    { path: 'forms', component: Forms },
    { path: 'gestion-des-etudiants', component: GestionDesEtudiants },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
