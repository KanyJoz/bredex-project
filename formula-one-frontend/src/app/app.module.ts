import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { RacerTeamsModule } from './racer-teams/racer-teams.module';

import { AppComponent } from './app.component';
import * as fromApp from './store/app.reducer';
import { RacerTeamsEffects } from './racer-teams/store/racer-teams.effect';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([RacerTeamsEffects, AuthEffects]),
    PartialsModule,
    AuthModule,
    RacerTeamsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
