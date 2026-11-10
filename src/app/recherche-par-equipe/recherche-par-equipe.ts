import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.html',
})
export class RechercheParEquipe implements OnInit {
  joueurs!: Joueur[];
  idEquipe!: number;
  equipes!: Equipe[];

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
  this.equipes = this.joueurService.listerEquipes();
}

onChange() {
  this.joueurService.rechercherParEquipe(this.idEquipe)
    .subscribe((js) => (this.joueurs = js));
}
}