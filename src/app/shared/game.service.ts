// game.service.ts
import {CardModel} from "../model/card.model";
import { Injectable } from '@angular/core';

//when site is loaded, create a stack of 30 cards
//every card gets a ranomized value between 0 and 5 for attack, defense, health and ressources
//the cost is the sum of the stats/4 rounded down

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player1Cards: CardModel[] = [];
  player2Cards: CardModel[] = [];
  stack: CardModel[] = [];
  events: string[] = [];
  initGame() {
    for (let i = 0; i < 30; i++) {
      let attack = Math.floor(Math.random() * 6);
      let defense = Math.floor(Math.random() * 6);
      let health = Math.floor(Math.random() * 6);
      let ressources = Math.floor(Math.random() * 6);
      let cost = Math.floor((attack + defense + health + ressources) / 4);
      let card = new CardModel(attack, defense, health, cost, ressources);
      this.stack.push(card);
    }
    // create a string with the stats of each card
    // one string for each card in the stack
    // every value should be preceded by the first 3 letter of the stat
    // Send this string to the events array in infopanel.component.ts
    for (let i = 0; i < 30; i++) {
      let card = this.stack[i];
      let stats = "atk: " + card.attack + " def: " + card.defense + " hp: " + card.health + " res: " + card.ressources;
      this.events.push(stats);
    }
  }
  getEvents(): string[] {
    return this.events;
  }

}
