import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class RacerTeamsInterceptorService implements HttpInterceptor {
    intercept(reqest: HttpRequest<any>, next: HttpHandler) {
        return next.handle(reqest).pipe(
            map(event => {
                if (event instanceof HttpResponse && event.url?.startsWith(environment.apiURL + 'racer_teams')) {
                    event = event.clone({ body: event.body.data })
                }
                return event;
            })
        );
    }
}
