import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TeamsRouterModule } from './teams.routing';

import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
	declarations: [TeamListComponent],
	imports: [BrowserModule, TeamsRouterModule]
})

export class TeamsModule {}