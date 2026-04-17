import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculs } from './calculs/calculs';
import { Jeu } from './jeu/jeu';
import { PipesDemoComponent } from './pipes/pipes-demo';
import { Weather } from './weather/weather';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'calculs', component: Calculs },
    { path: 'jeu', component: Jeu },
    { path: 'weather', component: Weather },
    { path: 'pipes', component: PipesDemoComponent },

    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
