import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs";

import { environment } from "src/environments/environment";
import * as RacerTeamsActions from "./racer-teams.actions";
import { RacerTeam } from './../racer-team.model';

type RacerTeamResponse = {
    data: RacerTeam[],
};

@Injectable()
export class RacerTeamsEffects {
    fetchRacerTeams = createEffect(() => {
        return this.actions.pipe(
            ofType(RacerTeamsActions.FETCH_RACER_TEAMS),
            switchMap(() => {
                return this.http.get<RacerTeamResponse>(environment.apiURL + 'racer_teams');
            }),
            map(racerTeamsResponseObj => {
                return new RacerTeamsActions.SetRacerTeams(racerTeamsResponseObj.data);
            })
        );
    });

    constructor(
        private actions: Actions,
        private http: HttpClient,
    ) {}
}
