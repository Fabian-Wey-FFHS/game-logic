// player2hand.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { CardModel } from "../../model/card.model";
@Component({
  selector: 'app-player2hand',
  templateUrl: './player2hand.component.html',
  styleUrls: ['./player2hand.component.css']
})
//add an appropriate Angular decorator for this component


export class Player2HandComponent implements OnInit {
  player2Hand: CardModel[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.player2Hand = this.gameService.getPlayer2Hand();
  }

  selectCard(card: CardModel) {
    // Toggle the selected state of the card
    card.selected = !card.selected;
    //It's only possible to select one card at a time
    this.player2Hand.forEach(c => {
      if (c !== card) {
        c.selected = false;
      }
    });
  }
}
