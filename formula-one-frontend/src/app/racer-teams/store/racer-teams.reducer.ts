import * as RacerTeamsActions from './racer-teams.actions';
import { RacerTeam } from './../racer-team.model';

export interface RacerTeamsState {
    racerTeams: RacerTeam[];
    racerTeamsLoading: boolean;
    racerTeamsError: string;

    racerTeam: RacerTeam;
    racerTeamLoading: boolean;
    racerTeamError: string;
}

const initialRacerTeamsState: RacerTeamsState = {
    racerTeams: [],
    racerTeamsLoading: false,
    racerTeamsError: '',

    racerTeam: null,
    racerTeamLoading: false,
    racerTeamError: '',
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
        case RacerTeamsActions.START_ADD_RACER_TEAM:
        case RacerTeamsActions.GET_RACER_TEAM:
            return {
                ...state,
                racerTeamLoading: true,
                racerTeamsError: '',
            };
        case RacerTeamsActions.ADD_RACER_TEAM:
            return {
                ...state,
                racerTeams: [...state.racerTeams, action.payload],
                racerTeamLoading: false,
                racerTeamsError: '',
            };
        case RacerTeamsActions.SET_RACER_TEAM:
            const newRacerTeam = new RacerTeam(
                action.payload.id,
                action.payload.name,
                action.payload.yearOfFoundation,
                action.payload.wonWorldCupsNumber,
                !!action.payload.haveAlreadyPayed
            );

            return {
                ...state,
                racerTeam: newRacerTeam,
                racerTeamLoading: false,
                racerTeamsError: '',
            };
        case RacerTeamsActions.START_DELETE_RACER_TEAM:
            return {
                ...state,
                racerTeamsLoading: true,
            };
        case RacerTeamsActions.DELETE_RACER_TEAM:
            return {
                ...state,
                racerTeams: state.racerTeams.filter(racerTeam => racerTeam.id !== action.payload),
                racerTeamsLoading: false,
            };
        default:
            return state;
    }
}
