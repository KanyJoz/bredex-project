import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('f') loginForm!: NgForm;
    userLoading: boolean = false;
    userError: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.loginForm.value);
        this.loginForm.reset();
    }

}
