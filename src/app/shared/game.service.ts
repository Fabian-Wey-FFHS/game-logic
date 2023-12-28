// game.service.ts
// This Service runs the logic of the game.
// The service keeps track of the cards in the hands of the Players (5 for each Player),
// the cardgrid where players can play their cards and the state of the game
import {CardModel} from "../model/card.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  stack: CardModel[] = [];
  events: string[] = [];
  player1Hand: CardModel[] = [];
  player2Hand: CardModel[] = [];

  // 5 column 4 row grid
  cardGrid: CardModel[][] = [];

  // initializes a card stack with random values for attack, defense, health and resources. The cost of the card is
  // calucalated by
  initGame() {
    for (let i = 0; i < 30; i++) {
      let attack = Math.floor(Math.random() * 6);
      let defense = Math.floor(Math.random() * 6);
      let health = 1+Math.floor(Math.random() * 5);
      let resources = Math.floor(Math.random() * 6);
      let cost = Math.floor((attack + defense + health + resources) / 4);
      let stats = "atk: " + attack + "\n def: " + defense + "\n hp: " + health + "\n res: " + resources + "\n $: " + cost;
      let card = new CardModel(attack, defense, health, cost, resources, stats);
      this.stack.push(card);
    }
    // create a string with the stats of each card
    // one string for each card in the stack
    // every value should be preceded by the first 3 letter of the stat
    for (let i = 0; i < 30; i++) {
      let card = this.stack[i];
    }
    // deals 5 cards from the stack to the players. The dealt cards are displayed as
    this.player1Hand = this.stack.splice(0, 5);
    this.player2Hand = this.stack.splice(0, 5);
    this.events.push("cards dealt");
  }
  getEvents(): string[] {
    return this.events;
  }
  getPlayer1Hand(): CardModel[] {
    return this.player1Hand;
  }

  getPlayer2Hand(): CardModel[] {
    return this.player2Hand;
  }

  // Place the selected card on the board at the specified position
  placeCardOnBoard(card: CardModel, row: number, column: number) {
    this.cardGrid[row][column] = card;
    card.selected = false; // Deselect the card after placing it on the board
  }

}
