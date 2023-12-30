// board.component.ts
import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { CardModel } from "src/app/model/card.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private gameService: GameService) {}

  placeCardOnBoard(event: any) {
    // Handle placing the card on the board based on the event information
    // You may need to extract row and column information from the event here
  }
}


