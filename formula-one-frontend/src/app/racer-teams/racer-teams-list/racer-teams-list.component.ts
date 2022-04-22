import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { RacerTeam } from '../racer-team.model';

@Component({
  selector: 'app-racer-teams-list',
  templateUrl: './racer-teams-list.component.html',
  styleUrls: ['./racer-teams-list.component.scss']
})
export class RacerTeamsListComponent implements OnInit {
    racerTeams: RacerTeam[] = [];

    constructor (private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store
        .select('racerTeams').pipe(
            map(racerTeamsSlice => {
                return racerTeamsSlice.racerTeams;
            })
        ).subscribe(racerTeamsData => {
            this.racerTeams = racerTeamsData;
        });
    }
}
