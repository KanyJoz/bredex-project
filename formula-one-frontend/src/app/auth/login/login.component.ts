import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('f') loginForm!: NgForm;
    userLoading: boolean = false;
    userError: string = '';

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.select('auth')
        .subscribe(authSlice => {
            this.userLoading = authSlice.userLoading;
            this.userError = authSlice.userError;
        });
    }

    onSubmit(): void {
        this.store.dispatch(new AuthActions.LoginUser(this.loginForm.value));
    }

}
