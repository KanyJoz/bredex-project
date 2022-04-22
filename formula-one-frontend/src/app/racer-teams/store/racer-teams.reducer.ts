import * as RacerTeamsActions from './racer-teams.actions';
import { RacerTeam } from './../racer-team.model';

export interface RacerTeamsState {
    racerTeams: RacerTeam[];
}

const initialRacerTeamsState: RacerTeamsState = {
    racerTeams: [],
};

export function racerTeamsReducer(
    state: RacerTeamsState = initialRacerTeamsState,
    action: RacerTeamsActions.RacerTeamsActions
): RacerTeamsState {
    switch (action.type) {
        case RacerTeamsActions.SET_RACER_TEAMS:
            return {
                ...state,
                racerTeams: [...action.payload],
            };
        case RacerTeamsActions.ADD_RACER_TEAM:
            return addRacerTeam(state, action);
        default:
            return state;
    }
}

function addRacerTeam(
    state: RacerTeamsState,
    action: RacerTeamsActions.AddRacerTeam
) {
    const newRacerteam = new RacerTeam(
        action.payload.name,
        action.payload.year,
        action.payload.cups,
        action.payload.payed,
        action.payload.id,
    );

    return {
        ...state,
        racerTeams: [...state.racerTeams, newRacerteam],
    };
}
