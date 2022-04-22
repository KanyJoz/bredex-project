import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RacerTeamsInterceptorService } from './racer-teams/interceptors/racer-teams.interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RacerTeamsInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
