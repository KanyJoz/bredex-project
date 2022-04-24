import { Action } from "@ngrx/store";

import { User } from './../user.model';

export const REGISTER_USER = '[Auth] Register User';
export const LOGIN_USER = '[Auth] Login User';
export const SET_USER = '[Auth] Set User';
export const FAIL_USER = '[Auth] Fail User';
export const LOGOUT_USER = '[Auth] Logout User';

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;

    constructor(public payload: {
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    }) {}
}

export class LoginUser implements Action {
    readonly type = LOGIN_USER;

    constructor(public payload: {
        email: string,
        password: string,
    }) {}
}

export class SetUser implements Action {
    readonly type = SET_USER;

    constructor(public payload: User) {}
}

export class FailUser implements Action {
    readonly type = FAIL_USER;

    constructor(public payload: string) {}
}

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}


export type AuthActions =
    | RegisterUser
    | LoginUser
    | SetUser
    | FailUser
    | LogoutUser;
