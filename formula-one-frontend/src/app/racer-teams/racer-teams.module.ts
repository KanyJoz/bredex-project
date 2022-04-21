import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RacerTeamsRoutingModule } from './racer-teams-routing.module';

import { RacerTeamsComponent } from './racer-teams.component';
import { RacerTeamsListComponent } from './racer-teams-list/racer-teams-list.component';
import { RacerTeamNewEditComponent } from './racer-team-new-edit/racer-team-new-edit.component';

@NgModule({
  declarations: [
    RacerTeamsComponent,
    RacerTeamsListComponent,
    RacerTeamNewEditComponent,
  ],
  imports: [
    RacerTeamsRoutingModule,
    SharedModule,
  ],
  exports: [
    RacerTeamsComponent,
    RacerTeamsListComponent,
    RacerTeamNewEditComponent,
    RacerTeamNewEditComponent,
    RacerTeamsRoutingModule,
  ]
})
export class RacerTeamsModule { }
