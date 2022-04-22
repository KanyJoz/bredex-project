import { ActionReducerMap } from '@ngrx/store';

import * as fromRacerTeams from '../racer-teams/store/racer-teams.reducer';

export interface AppState {
    racerTeams: fromRacerTeams.RacerTeamsState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    racerTeams: fromRacerTeams.racerTeamsReducer,
}
