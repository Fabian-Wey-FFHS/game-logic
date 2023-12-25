import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { InfopanelComponent } from './infopanel/infopanel.component';
import { BoardComponent } from './board/board.component';
import { CardgridComponent } from './board/cardgrid/cardgrid.component';
import { Player1handComponent } from './board/player1hand/player1hand.component';
import { Player2handComponent } from './board/player2hand/player2hand.component';
import {ChatpanelComponent} from "./chatpanel/chatpanel.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatpanelComponent,
    InfopanelComponent,
    BoardComponent,
    CardgridComponent,
    Player1handComponent,
    Player2handComponent,
    ChatpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
