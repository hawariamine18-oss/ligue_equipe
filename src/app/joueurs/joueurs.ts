import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-joueurs',
  imports: [DatePipe, RouterLink],
  templateUrl: './joueurs.html',
})
export class Joueurs {
  joueurs: Joueur[];

  
constructor(private joueurService: JoueurService, public authService: AuthService) {
  this.joueurs = joueurService.listeJoueurs();
}

  supprimerJoueur(j: Joueur) {
    if (confirm('Etes-vous sûr ?')) this.joueurService.supprimerJoueur(j);
  }
  
}