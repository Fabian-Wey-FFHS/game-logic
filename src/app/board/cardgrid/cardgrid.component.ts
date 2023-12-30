// cardgrid.component.ts
import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { CardModel } from "../../model/card.model";

@Component({
  selector: 'app-cardgrid',
  templateUrl: './cardgrid.component.html',
  styleUrls: ['./cardgrid.component.css']
})
// creates a cardgrid with 5 columns and 4 rows
// the cards in the grid are displayed as gray boxes that are empty if no card is placed on the grid
// or display the stats of the card if a card is placed on the grid

export class CardgridComponent {
  constructor(private gameService: GameService) {}
  // intialize the cardgrid with 5 columns and 4 rows
  cardGrid= this.gameService.cardGrid;
  // create a function to place a card on the grid
  placeCardOnBoard(event: any, card: CardModel) {
    // Handle placing the card on the board based on the event information
    // You may need to extract row and column information from the event here
    // get the row and column information from the event
    let row = event.target.parentNode.rowIndex;
    let column = event.target.cellIndex;
    // place the card on the grid
    this.cardGrid[column][row] = card;
  }
}
