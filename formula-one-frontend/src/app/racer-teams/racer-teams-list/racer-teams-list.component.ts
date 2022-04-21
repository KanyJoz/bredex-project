import { Component } from '@angular/core';

import { RacerTeam } from '../racer-team/racer-team.model';

@Component({
  selector: 'app-racer-teams-list',
  templateUrl: './racer-teams-list.component.html',
  styleUrls: ['./racer-teams-list.component.scss']
})
export class RacerTeamsListComponent {
    racerTeams: RacerTeam[] = [
        new RacerTeam('Meclaren Mercedes', 1901, 10, true),
        new RacerTeam('Red Bull Racing', 1999, 3, true),
        new RacerTeam('Ferrari', 1944, 8, true),
    ];
}
