import * as RacerTeamsActions from './racer-teams.actions';
import { RacerTeam } from './../racer-team.model';

export interface RacerTeamsState {
    racerTeams: RacerTeam[];
    racerTeamsLoading: boolean;
    racerTeamsError: string;
}

const initialRacerTeamsState: RacerTeamsState = {
    racerTeams: [],
    racerTeamsLoading: false,
    racerTeamsError: '',
};

export function racerTeamsReducer(
    state: RacerTeamsState = initialRacerTeamsState,
    action: RacerTeamsActions.RacerTeamsActions
): RacerTeamsState {
    switch (action.type) {
        case RacerTeamsActions.FETCH_RACER_TEAMS:
            return {
                ...state,
                racerTeamsLoading: true,
                racerTeamsError: '',
            }
        case RacerTeamsActions.SET_RACER_TEAMS:
            return {
                ...state,
                racerTeams: [...action.payload],
                racerTeamsLoading: false,
            };
        case RacerTeamsActions.FAIL_RACER_TEAMS:
            return {
                ...state,
                racerTeamsError: action.payload,
                racerTeamsLoading: false,
            }
        case RacerTeamsActions.ADD_RACER_TEAM:
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
        default:
            return state;
    }
}
