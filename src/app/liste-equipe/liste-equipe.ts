import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur';
import { UpdateEquipe } from '../update-equipe/update-equipe';

@Component({
  selector: 'app-liste-equipes',
  imports: [UpdateEquipe],
  templateUrl: './liste-equipe.html',
})
export class ListeEquipes implements OnInit {
  equipes!: Equipe[];
  updatedEquipe: Equipe = { idEquipe: 0, nomEquipe: '' };
  ajout: boolean = true;

  constructor(private joueurService: JoueurService) {}

  ngOnInit(): void {
    this.chargerEquipes();
  }

  chargerEquipes() {
    this.equipes = this.joueurService.listerEquipes();
  }

  equipeUpdated(e: Equipe) {
    console.log('Equipe updated event', e);
    if (this.ajout) this.joueurService.ajouterEquipe(e);
    else this.joueurService.updateEquipe(e);

    this.chargerEquipes();
    
    this.updatedEquipe = { idEquipe: 0, nomEquipe: '' };
    this.ajout = true;
  }

  updateEquipe(e: Equipe) {
    this.updatedEquipe = { ...e };  
  }
}