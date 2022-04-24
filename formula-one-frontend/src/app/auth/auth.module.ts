import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
        FormsModule
    ],
    exports: [
        AuthRoutingModule,
        RegisterComponent,
        LoginComponent,
    ]
})
export class AuthModule { }
