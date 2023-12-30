// infopanel.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-infopanel',
  templateUrl: './infopanel.component.html',
  styleUrls: ['./infopanel.component.css']
})
export class InfopanelComponent implements OnInit {

  events: string[] = [];

  constructor(public gameService: GameService) {}

  ngOnInit() {
   this.gameService.initGame();
    this.events = this.gameService.getEvents();
  }

  finishTurn() {
    this.gameService.finishTurn();
  }
}

