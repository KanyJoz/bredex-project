import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacerTeamsComponent } from './racer-teams.component';
import { RacerTeamsListComponent } from './racer-teams-list/racer-teams-list.component';
import { RacerTeamNewEditComponent } from './racer-team-new-edit/racer-team-new-edit.component';
import { RacerTeamsFetchResolverService } from './resolvers/racer-teams.fetch-resolver.service';

const racerTeamsRoutes: Routes = [
    {
        path: '',
        component: RacerTeamsComponent,
        children: [
            { path: '', component: RacerTeamsListComponent},
            { path: 'new', component: RacerTeamNewEditComponent },
            { path: ':id/edit', component: RacerTeamNewEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(racerTeamsRoutes)],
    exports: [RouterModule],
})
export class RacerTeamsRoutingModule {}
