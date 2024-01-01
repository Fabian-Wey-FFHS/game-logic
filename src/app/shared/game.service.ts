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
  currentPlayer: number = 1; // Initially, it's player 1's turn

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
    // deals 5 cards from the stack to the players. The dealt cards are displayed as
    this.player1Hand = this.stack.splice(0, 5);
    this.player2Hand = this.stack.splice(0, 5);
    this.events.push("cards dealt");

    // initialize the empty cardgrid with 5 columns and 4 rows
    for (let i = 0; i < 5; i++) {
      this.cardGrid[i] = [];
      for (let j = 0; j < 4; j++) {
        this.cardGrid[i][j] = null;
      }
    }
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


  placeCardOnBoard(row: number, col: number) {
    const currentPlayerHand = this.currentPlayer === 1 ? this.player1Hand : this.player2Hand;
    const targetRow = this.currentPlayer === 1 ? 2 : 3;

    // Check if it's the turn of the current player and the target position is in the correct row
    if (this.currentPlayer === 1 && row === targetRow && col >= 0 && col < this.cardGrid[row].length) {
      const selectedCard = currentPlayerHand.find((c) => c.selected);

      // Check if a card is selected and the target position is empty
      if (selectedCard && !this.cardGrid[row][col]) {
        // Place the selected card on the board
        this.cardGrid[row][col] = selectedCard;

        // Remove the placed card from the player's hand
        const selectedIndex = currentPlayerHand.indexOf(selectedCard);
        if (selectedIndex !== -1) {
          currentPlayerHand.splice(selectedIndex, 1);
        }

        // Draw the top card from the stack and add it to the player's hand
        const drawnCard = this.drawCardFromStack();
        if (drawnCard) {
          currentPlayerHand.push(drawnCard);

          // Update the selected state of the card
          selectedCard.selected = false;

          // Update the events
          this.events.push('card placed on board');
        }
      }
    }
  }


  // Method to draw the top card from the stack
  private drawCardFromStack(): CardModel | undefined {
    return this.stack.pop();
  }

  finishTurn() {
    // Your existing finish turn logic
    alert('Finish turn');

    // Switch to the next player's turn
    this.switchTurn();
  }

  // Method to switch to the next player's turn
  switchTurn() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }


}
