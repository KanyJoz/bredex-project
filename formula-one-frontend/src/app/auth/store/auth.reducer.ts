import { User } from './../user.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
    user: User;
    userLoading: boolean;
    userError: string;
}

const initialAuthState: AuthState = {
    user: null,
    userLoading: false,
    userError: '',
};

export function racerTeamsReducer(
    state: AuthState = initialAuthState,
    action: AuthActions.AuthActions
): AuthState {
    switch (action.type) {
        case AuthActions.REGISTER_USER:
        case AuthActions.LOGIN_USER:
            return {
                ...state,
                userLoading: true,
                userError: '',
            };
        case AuthActions.SET_USER:
            const currentUser = new User(
                action.payload.name,
                action.payload.email,
                action.payload.token
            );

            return {
                ...state,
                user: currentUser,
                userLoading: false,
            };
        case AuthActions.FAIL_USER:
            return {
                ...state,
                user: null,
                userLoading: false,
                userError: action.payload
            };
        case AuthActions.LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
