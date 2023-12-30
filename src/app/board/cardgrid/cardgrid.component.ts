// cardgrid.component.ts
import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { CardModel } from "../../model/card.model";

@Component({
  selector: 'app-cardgrid',
  templateUrl: './cardgrid.component.html',
  styleUrls: ['./cardgrid.component.css']
})
export class CardgridComponent {
  constructor(private gameService: GameService) {}
  cardGrid = this.gameService.cardGrid;

  placeCardOnBoard(row: number, col: number) {
    let card = this.gameService.getPlayer1Hand().find(c => c.selected);
    if (card) {
      if (!this.cardGrid[row][col]) {
        this.gameService.placeCardOnBoard(row, col);
      }
    }
  }
}

