import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') registerForm!: NgForm;
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
        this.store.dispatch(new AuthActions.RegisterUser(this.registerForm.value));
    }

}
