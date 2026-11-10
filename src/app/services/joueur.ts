import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';

@Injectable({ providedIn: 'root' })
export class JoueurService {
  joueurs: Joueur[];
  equipes: Equipe[];

  constructor() {
    this.equipes = [
      { idEquipe: 1, nomEquipe: 'Espérance' },
      { idEquipe: 2, nomEquipe: 'Club Africain' },
      { idEquipe: 3, nomEquipe: 'Etoile du Sahel' },
    ];

    this.joueurs = [
      { numerojoueur: 11, nomjoueur: 'youssef', prixjoueur: 3000, datedenaissance: new Date('1985-01-10'), equipe: this.equipes[0] },
      { numerojoueur: 12, nomjoueur: 'mouhamed', prixjoueur: 2500, datedenaissance: new Date('1990-12-12'), equipe: this.equipes[1] },
      { numerojoueur: 13, nomjoueur: 'hamza', prixjoueur: 1000, datedenaissance: new Date('1995-12-05'), equipe: this.equipes[2] },
    ];
  }

  listeJoueurs(): Joueur[] {
    return this.joueurs;
  }

  ajouterJoueur(j: Joueur) {
    this.joueurs.push(j);
  }

  supprimerJoueur(j: Joueur) {
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) this.joueurs.splice(index, 1);
  }

  consulterJoueur(id: number): Joueur {
    return this.joueurs.find((j) => j.numerojoueur == id)!;
  }

  trierJoueurs() {
    this.joueurs.sort((a, b) => a.numerojoueur - b.numerojoueur);
  }

  updateJoueur(ancienNumero: number, j: Joueur): boolean {
    const doublon = this.joueurs.some(
      (x) => x.numerojoueur == j.numerojoueur && x.numerojoueur != ancienNumero
    );
    if (doublon) return false;

    const index = this.joueurs.findIndex((x) => x.numerojoueur == ancienNumero);
    if (index > -1) this.joueurs[index] = j;

    this.trierJoueurs();
    return true;
  }

  listerEquipes(): Equipe[] {
    return this.equipes;
  }

  consulterEquipe(id: number): Equipe {
    return this.equipes.find((e) => e.idEquipe == id)!;
  }

  rechercherParEquipe(idEquipe: number): Observable<Joueur[]> {
    return of(this.joueurs.filter((j) => j.equipe?.idEquipe == idEquipe));
  }

  rechercherParNom(nom: string): Observable<Joueur[]> {
    return of(this.joueurs.filter((j) =>
      j.nomjoueur?.toLowerCase().includes(nom.toLowerCase())));
  }
}