import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';

import { AppRouterModule } from './app.routing';

import { CommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    TeamsModule,
    PlayersModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
