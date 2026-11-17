import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-equipe',
  imports: [FormsModule],
  templateUrl: './update-equipe.html',
})
export class UpdateEquipe implements OnInit {
  @Input() equipe!: Equipe;
  @Input() ajout!: boolean;
  @Output() equipeUpdated = new EventEmitter<Equipe>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateEquipe', this.equipe);
  }

  saveEquipe() {
    this.equipeUpdated.emit(this.equipe);
  }
}