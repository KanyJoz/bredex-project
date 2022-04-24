import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') registerForm!: NgForm;
    userLoading: boolean = false;
    userError: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.registerForm.value);
        this.registerForm.reset();
    }

}
