import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { InfopanelComponent } from './infopanel/infopanel.component';
import { BoardComponent } from './board/board.component';
import { CardgridComponent } from './board/cardgrid/cardgrid.component';
import { Player1HandComponent } from './board/player1hand/player1hand.component';
import { Player2HandComponent } from './board/player2hand/player2hand.component';
import {ChatpanelComponent} from "./chatpanel/chatpanel.component";
import { GameService } from "src/app/shared/game.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatpanelComponent,
    InfopanelComponent,
    BoardComponent,
    CardgridComponent,
    Player1HandComponent,
    Player2HandComponent,
    ChatpanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }


