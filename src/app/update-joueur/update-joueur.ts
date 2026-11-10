import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';

@Component({
  selector: 'app-update-joueur',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-joueur.html',
})
export class UpdateJoueur implements OnInit {
  currentJoueur = {} as Joueur;
  equipes!: Equipe[];
  updatedEquipeId!: number;
  ancienNumero!: number;
  erreur = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private joueurService: JoueurService
  ) {}

  ngOnInit() {
    this.equipes = this.joueurService.listerEquipes();
    this.ancienNumero = Number(this.activatedRoute.snapshot.params['id']);
    const original = this.joueurService.consulterJoueur(this.ancienNumero);
    this.currentJoueur = { ...original };
    this.updatedEquipeId = original.equipe?.idEquipe!;
  }

  onDateChange(value: string) {
    this.currentJoueur.datedenaissance = value ? new Date(value) : undefined;
  }

  updateJoueur() {
    this.currentJoueur.equipe = this.joueurService.consulterEquipe(this.updatedEquipeId);
    const ok = this.joueurService.updateJoueur(this.ancienNumero, this.currentJoueur);
    if (!ok) {
      this.erreur = 'Ce numéro existe déjà pour un autre joueur !';
      return;
    }
    this.router.navigate(['joueurs']);
  }
}