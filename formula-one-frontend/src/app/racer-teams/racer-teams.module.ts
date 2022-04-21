import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RacerTeamsRoutingModule } from './racer-teams-routing.module';

import { RacerTeamsComponent } from './racer-teams.component';
import { RacerTeamsListComponent } from './racer-teams-list/racer-teams-list.component';
import { RacerTeamNewEditComponent } from './racer-team-new-edit/racer-team-new-edit.component';
import { RacerTeamComponent } from './racer-team/racer-team.component';

@NgModule({
  declarations: [
    RacerTeamsComponent,
    RacerTeamsListComponent,
    RacerTeamNewEditComponent,
    RacerTeamComponent,
  ],
  imports: [
    RacerTeamsRoutingModule,
    SharedModule,
  ],
  exports: [
    RacerTeamsComponent,
    RacerTeamsListComponent,
    RacerTeamNewEditComponent,
    RacerTeamComponent,
    RacerTeamNewEditComponent,
    RacerTeamsRoutingModule,
  ]
})
export class RacerTeamsModule { }
