import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';

@Component({
  selector: 'app-add-joueur',
  imports: [FormsModule],
  templateUrl: './add-joueur.html',
  styleUrl: './add-joueur.css'
})
export class AddJoueur implements OnInit {
  newJoueur = {} as Joueur;
  equipes!: Equipe[];
  newIdEquipe!: number;

  constructor(private joueurService: JoueurService, private router: Router) {}

  ngOnInit() {
    this.equipes = this.joueurService.listerEquipes();
  }

  addJoueur() {
    this.newJoueur.equipe = this.joueurService.consulterEquipe(this.newIdEquipe);
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['joueurs']);
  }
}