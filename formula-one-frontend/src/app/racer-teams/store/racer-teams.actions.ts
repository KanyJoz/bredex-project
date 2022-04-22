import { Action } from "@ngrx/store";

import { RacerTeam } from './../racer-team.model';

export const FETCH_RACER_TEAMS = '[Racer Teams] Fetch Racer Teams';
export const SET_RACER_TEAMS = '[Racer Teams] Set Racer Teams';
export const ADD_RACER_TEAM = '[Racer Teams] Add Racer Team';

export class FetchRacerTeams implements Action {
    readonly type = FETCH_RACER_TEAMS;
}

export class SetRacerTeams implements Action {
    readonly type = SET_RACER_TEAMS;

    constructor(public payload: RacerTeam[]) {}
}

export class AddRacerTeam implements Action {
    readonly type = ADD_RACER_TEAM;

    constructor(public payload: {
        id: number,
        name: string,
        year: number,
        cups: number,
        payed: boolean,
    }) {}
}

export type RacerTeamsActions =
    | AddRacerTeam
    | SetRacerTeams;
