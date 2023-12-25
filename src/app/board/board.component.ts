import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(private gameService: GameService) { }


}
