import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import { RacerTeam } from '../racer-team.model';
import * as RacerTeamsActions from '../store/racer-teams.actions';

@Component({
  selector: 'app-racer-teams-list',
  templateUrl: './racer-teams-list.component.html',
  styleUrls: ['./racer-teams-list.component.scss']
})
export class RacerTeamsListComponent implements OnInit {
    racerTeams: RacerTeam[] = [];
    racerTeamsError: string = '';
    racerTeamsLoading: boolean = false;

    constructor (private store: Store<AppState>, private router: Router) {
        this.store.dispatch(new RacerTeamsActions.FetchRacerTeams());
    }

    ngOnInit(): void {
        this.store
        .select('racerTeams').pipe(
        ).subscribe(racerTeamsSlice => {
            this.racerTeams = racerTeamsSlice.racerTeams;
            this.racerTeamsLoading = racerTeamsSlice.racerTeamsLoading;
            this.racerTeamsError = racerTeamsSlice.racerTeamsError;
        });
    }

    onUpdate(racerTeamID: number) {
        this.router.navigate(['/racer-teams', racerTeamID, 'edit']);
    }

    onDelete(racerTeamID: number) {
        if (confirm("Are you sure to delete this racer team?")) {
            this.store.dispatch(new RacerTeamsActions.StartDeleteRacerTeams(racerTeamID));
        }
    }
}
