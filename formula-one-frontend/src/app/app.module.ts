import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { RacerTeamsModule } from './racer-teams/racer-teams.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PartialsModule,
    RacerTeamsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
