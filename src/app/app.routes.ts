import { Routes } from '@angular/router';
import { Joueurs } from './joueurs/joueurs';
import { AddJoueur } from './add-joueur/add-joueur';
import { UpdateJoueur } from './update-joueur/update-joueur';
import { RechercheParEquipe } from './recherche-par-equipe/recherche-par-equipe';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { joueurGuard } from './guards/joueur-guard';

export const routes: Routes = [
  { path: 'joueurs', component: Joueurs },
  { path: 'add-joueur', component: AddJoueur, canActivate: [joueurGuard] },
  { path: 'updateJoueur/:id', component: UpdateJoueur, canActivate: [joueurGuard] },
  { path: 'rechercheParEquipe', component: RechercheParEquipe },
  { path: 'login', component: Login },
  { path: 'app-forbidden', component: Forbidden },
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' },
];