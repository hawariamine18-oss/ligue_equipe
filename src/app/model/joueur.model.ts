import { Equipe } from './equipe.model';

export interface Joueur {
  numerojoueur: number;
  nomjoueur?: string;
  prixjoueur?: number;
  datedenaissance?: Date;
  equipe?: Equipe;     }