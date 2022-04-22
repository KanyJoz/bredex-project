import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { AppState } from './../../store/app.reducer';
import * as RacerTeamsActions from '../store/racer-teams.actions';
import { take } from "rxjs";
import { RacerTeam } from "../racer-team.model";

@Injectable({providedIn: 'root'})
export class RacerTeamsFetchResolverService implements Resolve<RacerTeam[]> {
    constructor(
        private store: Store<AppState>,
        private actions: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.dispatch(new RacerTeamsActions.FetchRacerTeams());
        return this.actions.pipe(
            ofType(RacerTeamsActions.SET_RACER_TEAMS),
            take(1)
        );
    }
}
