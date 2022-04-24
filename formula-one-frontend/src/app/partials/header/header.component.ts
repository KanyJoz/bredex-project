import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { HeaderLink } from './header-link.model';
import { User } from './../../auth/user.model';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: User = null;
    brandText: string = 'Home';
    headerLinks: HeaderLink[] = [
        new HeaderLink('List Teams', ['/racer-teams'], false),
        new HeaderLink('Add Team', ['/racer-teams', 'new'], true),
    ];
    dropdownText: string = 'Settings';

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.select('auth').pipe(
            map(authSlice => {
                return authSlice.user;
            })
        )
        .subscribe(user => {
            this.user = user;
        });
    }

    onLogout(): void {
        console.log("Logout");
    }
}
