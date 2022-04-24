import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from "rxjs";

import { environment } from "src/environments/environment";
import * as AuthActions from "./auth.actions";
import { User } from "../user.model";

@Injectable()
export class AuthEffects {
    registerUser = createEffect(() => {
        return this.actions.pipe(
            ofType(AuthActions.REGISTER_USER),
            switchMap((registerData: AuthActions.RegisterUser) => {
                return this.http.post<User>(environment.apiURL + 'register', registerData.payload).pipe(
                    map(registeredUser => {
                        return new AuthActions.SetUser(registeredUser);
                    }),
                    catchError(errorsResponse => {
                        return of(new AuthActions.FailUser('Could not register this user!'));
                    })
                );
            })
        );
    });

    loginUser = createEffect(() => {
        return this.actions.pipe(
            ofType(AuthActions.LOGIN_USER),
            switchMap((loginData: AuthActions.LoginUser) => {
                return this.http.post<User>(environment.apiURL + 'login', loginData.payload).pipe(
                    map(loggedInUser => {
                        return new AuthActions.SetUser(loggedInUser);
                    }),
                    catchError(errorsResponse => {
                        return of(new AuthActions.FailUser('Could not log in this user!'));
                    })
                );
            })
        );
    });

    successAuth= createEffect(
        () =>
            this.actions.pipe(
                ofType(AuthActions.SET_USER, AuthActions.LOGOUT_USER),
                tap(() => {
                    this.router.navigate(['/home']);
                }),
            ),
            { dispatch: false },
    )

    constructor(
        private actions: Actions,
        private http: HttpClient,
        private router: Router
    ) {}
}
