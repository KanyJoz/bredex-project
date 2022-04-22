import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { RacerTeamsModule } from './racer-teams/racer-teams.module';

import { AppComponent } from './app.component';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
    PartialsModule,
    RacerTeamsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
