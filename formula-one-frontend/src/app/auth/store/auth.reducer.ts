import { User } from './../user.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
    user: User;
}

const initialAuthState: AuthState = {
    user: null,
};

export function racerTeamsReducer(
    state: AuthState = initialAuthState,
    action: AuthActions.AuthActions
): AuthState {
    switch (action.type) {

        default:
            return state;
    }
}
