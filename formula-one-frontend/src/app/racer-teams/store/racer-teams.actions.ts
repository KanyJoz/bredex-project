import { Action } from "@ngrx/store";

import { RacerTeam } from './../racer-team.model';

export const FETCH_RACER_TEAMS = '[Racer Teams] Fetch Racer Teams';
export const SET_RACER_TEAMS = '[Racer Teams] Set Racer Teams';
export const FAIL_RACER_TEAMS = '[Racer Teams] Fail Racer Teams';
export const ADD_RACER_TEAM = '[Racer Teams] Add Racer Team';
export const START_DELETE_RACER_TEAM = '[Racer Teams] Start Delete Racer Team';
export const DELETE_RACER_TEAM = '[Racer Teams] Delete Racer Team';

export class FetchRacerTeams implements Action {
    readonly type = FETCH_RACER_TEAMS;
}

export class SetRacerTeams implements Action {
    readonly type = SET_RACER_TEAMS;

    constructor(public payload: RacerTeam[]) {}
}

export class FailRacerTeams implements Action {
    readonly type = FAIL_RACER_TEAMS;

    constructor(public payload: string){}
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

export class StartDeleteRacerTeams implements Action {
    readonly type = START_DELETE_RACER_TEAM;

    constructor(public payload: number) {}
}

export class DeleteRacerTeam implements Action {
    readonly type = DELETE_RACER_TEAM;

    constructor(public payload: number) {}
}

export type RacerTeamsActions =
    | FetchRacerTeams
    | AddRacerTeam
    | SetRacerTeams
    | FailRacerTeams
    | DeleteRacerTeam
    | StartDeleteRacerTeams;
