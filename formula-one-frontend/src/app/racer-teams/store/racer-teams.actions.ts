import { Action } from "@ngrx/store";

import { RacerTeam } from './../racer-team.model';

export const FETCH_RACER_TEAMS = '[Racer Teams] Fetch Racer Teams';
export const SET_RACER_TEAMS = '[Racer Teams] Set Racer Teams';
export const FAIL_RACER_TEAMS = '[Racer Teams] Fail Racer Teams';
export const GET_RACER_TEAM = '[Racer Teams] Get Racer Team';
export const SET_RACER_TEAM = '[Racer Teams] Set Racer Team';
export const UNSET_RACER_TEAM = '[Racer Teams] Unset Racer Team';
export const START_ADD_RACER_TEAM = '[Racer Teams] Start Add Racer Team';
export const ADD_RACER_TEAM = '[Racer Teams] Add Racer Team';
export const START_UPDATE_RACER_TEAM = '[Racer Teams] Start Update Racer Team';
export const UPDATE_RACER_TEAM = '[Racer Teams] Update Racer Team';
export const FAIL_RACER_TEAM = '[Racer Teams] Fail Racer Team';
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

export class GetRacerTeam implements Action {
    readonly type = GET_RACER_TEAM;

    constructor(public payload: number) {}
}

export class SetRacerTeam implements Action {
    readonly type = SET_RACER_TEAM;

    constructor(public payload: RacerTeam) {}
}

export class UnSetRacerTeam implements Action {
    readonly type = UNSET_RACER_TEAM;
}

export class StartAddRacerTeam implements Action {
    readonly type = START_ADD_RACER_TEAM;

    constructor(public payload: {
        name: string,
        yearOfFoundation: number,
        wonWorldCups: number,
        haveAlreadyPayed: boolean,
    }) {}
}

export class AddRacerTeam implements Action {
    readonly type = ADD_RACER_TEAM;

    constructor(public payload: RacerTeam) {}
}

export class StartUpdateRacerTeam implements Action {
    readonly type = START_UPDATE_RACER_TEAM;

    constructor(public payload: {
        id: number,
        name: string,
        yearOfFoundation: number,
        wonWorldCups: number,
        haveAlreadyPayed: boolean,
    }) {}
}

export class UpdateRacerTeam implements Action {
    readonly type = UPDATE_RACER_TEAM;

    constructor(public payload: RacerTeam) {}
}

export class FailRacerTeam implements Action {
    readonly type = FAIL_RACER_TEAM;

    constructor(public payload: string){}
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
    | SetRacerTeams
    | FailRacerTeams
    | GetRacerTeam
    | SetRacerTeam
    | UnSetRacerTeam
    | StartAddRacerTeam
    | AddRacerTeam
    | StartUpdateRacerTeam
    | UpdateRacerTeam
    | FailRacerTeam
    | StartDeleteRacerTeams
    | DeleteRacerTeam;
