import { Action } from "@ngrx/store";

export const ADD_RACER_TEAM = '[Racer Teams] Add Racer team';

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

export type RacerTeamsActions = AddRacerTeam;
