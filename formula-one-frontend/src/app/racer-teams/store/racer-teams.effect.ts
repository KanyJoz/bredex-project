import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";

import { environment } from "src/environments/environment";
import * as RacerTeamsActions from "./racer-teams.actions";
import { RacerTeam } from './../racer-team.model';

@Injectable()
export class RacerTeamsEffects {
    fetchRacerTeams = createEffect(() => {
        return this.actions.pipe(
            ofType(RacerTeamsActions.FETCH_RACER_TEAMS),
            switchMap(() => {
                return this.http.get<RacerTeam[]>(environment.apiURL + 'racer_teams').pipe(
                    map(racerTeams => {
                        return new RacerTeamsActions.SetRacerTeams(racerTeams);
                    }),
                    catchError(errorResponse => {
                        return of(new RacerTeamsActions.FailRacerTeams('Could not load the racer teams from the server!'));
                    })
                );
            }),

        );
    });

    constructor(
        private actions: Actions,
        private http: HttpClient,
    ) {}
}
