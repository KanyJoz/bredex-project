import { ActionReducerMap } from '@ngrx/store';

import * as fromRacerTeams from '../racer-teams/store/racer-teams.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
    racerTeams: fromRacerTeams.RacerTeamsState;
    auth: fromAuth.AuthState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    racerTeams: fromRacerTeams.racerTeamsReducer,
    auth: fromAuth.racerTeamsReducer,
}
