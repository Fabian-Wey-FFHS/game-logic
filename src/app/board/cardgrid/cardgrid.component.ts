// cardgrid.component.ts
import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-cardgrid',
  templateUrl: './cardgrid.component.html',
  styleUrls: ['./cardgrid.component.css']
})
export class CardgridComponent {
  constructor(private gameService: GameService) {}
  cardGrid = this.gameService.cardGrid;

}

