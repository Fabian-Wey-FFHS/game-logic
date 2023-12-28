// player1hand.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import {CardModel} from "../../model/card.model";


@Component({
  selector: 'app-player1hand',
  templateUrl: './player1hand.component.html',
  styleUrls: ['./player1hand.component.css']
})
export class Player1HandComponent implements OnInit {
  player1Hand: CardModel[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.player1Hand = this.gameService.getPlayer1Hand();
  }

  selectCard(card: CardModel) {
    // Toggle the selected state of the card
    card.selected = !card.selected;
  }
}
