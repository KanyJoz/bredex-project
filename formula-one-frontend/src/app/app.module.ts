import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { RacerTeamsModule } from './racer-teams/racer-teams.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PartialsModule,
    RacerTeamsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
