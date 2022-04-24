import { Action } from "@ngrx/store";

export const REGISTER_USER = '[Auth] Register User';

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;
}


export type AuthActions =
    | RegisterUser;
