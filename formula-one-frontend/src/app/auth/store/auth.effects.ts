import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {


    constructor(
        private actions: Actions,
        private http: HttpClient,
        private router: Router
    ) {}
}
