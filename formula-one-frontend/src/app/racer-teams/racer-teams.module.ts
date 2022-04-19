import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
  ],
  exports: [
    RacerTeamsComponent,
    RacerTeamsListComponent,
    RacerTeamNewEditComponent,
  ]
})
export class RacerTeamsModule { }
