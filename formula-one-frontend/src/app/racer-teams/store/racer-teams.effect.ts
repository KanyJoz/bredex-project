import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from "rxjs";

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

    startDeleteRacerTeam = createEffect(() => {
        return this.actions.pipe(
            ofType(RacerTeamsActions.START_DELETE_RACER_TEAM),
            switchMap((startActionData: RacerTeamsActions.StartDeleteRacerTeams) => {
                return this.http.delete<RacerTeam>(environment.apiURL + 'racer_teams/' + startActionData.payload).pipe(
                    map(racerTeam => {
                        return new RacerTeamsActions.DeleteRacerTeam(racerTeam.id);
                    }),
                    catchError(errorsResponse => {
                        return of(new RacerTeamsActions.FailRacerTeams('Could not delete the racer team!'));
                    })
                );
            })
        );
    });

    startAddRacerTeam = createEffect(() => {
        return this.actions.pipe(
            ofType(RacerTeamsActions.START_ADD_RACER_TEAM),
            switchMap((startAddData: RacerTeamsActions.StartAddRacerTeam) => {
                return this.http.post<RacerTeam>(environment.apiURL + 'racer_teams', startAddData.payload).pipe(
                    map(newRacerTeam => {
                        return new RacerTeamsActions.AddRacerTeam(newRacerTeam);
                    }),
                    catchError(errorsResponse => {
                        return of(new RacerTeamsActions.FailRacerTeam('Could not add the new racer team!'));
                    })
                );
            })
        );
    });

    getRacerTeam = createEffect(() => {
        return this.actions.pipe(
            ofType(RacerTeamsActions.GET_RACER_TEAM),
            switchMap((getActionData: RacerTeamsActions.GetRacerTeam) => {
                return this.http.get<RacerTeam>(environment.apiURL + 'racer_teams/' + getActionData.payload).pipe(
                    map(racerTeam => {
                        return new RacerTeamsActions.SetRacerTeam(racerTeam);
                    }),
                    catchError(errorResponse => {
                        return of(new RacerTeamsActions.FailRacerTeam('Could not load the racer team from the server!'));
                    })
                );
            }),
        );
    });

    successAddRacerTeam = createEffect(
        () =>
            this.actions.pipe(
                ofType(RacerTeamsActions.ADD_RACER_TEAM),
                tap(() => {
                    this.router.navigate(['/racer-teams']);
                }),
            ),
            { dispatch: false },
    )

    constructor(
        private actions: Actions,
        private http: HttpClient,
        private router: Router
    ) {}
}
