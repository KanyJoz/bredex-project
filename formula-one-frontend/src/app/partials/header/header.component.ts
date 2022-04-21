import { Component } from '@angular/core';

import { HeaderLink } from './header-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    brandText: string = 'Home';
    headerLinks: HeaderLink[] = [
        new HeaderLink('List Teams', ['/racer-teams']),
        new HeaderLink('Add Team', ['/racer-teams', 'new']),
    ];
    dropdownText: string = 'Settings';
}
