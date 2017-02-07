import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayersRoutingModule } from './players.routing';

import { PlayerListComponent } from './player-list/player-list.component';


@NgModule({
	declarations: [PlayerListComponent],
	imports: [BrowserModule, PlayersRoutingModule]
})

export class PlayersModule {}