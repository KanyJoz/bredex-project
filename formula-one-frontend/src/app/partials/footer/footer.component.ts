import { Component } from '@angular/core';

import { FooterLink } from './footer-link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    copyRightText: string = 'Copyright © BREDEX Formula-1 CRUD App by József Kanyó (2022). All right reserved.';
    footerLinks: FooterLink[] = [
        new FooterLink('https://www.linkedin.com/in/j%C3%B3zsef-kany%C3%B3-7633aa161/', 'fa fa-linkedin-square'),
        new FooterLink('https://github.com/KanyJoz', 'fa fa-github-square'),
        new FooterLink('https://www.instagram.com/kanyjoz/?hl=hu', 'fa fa-instagram'),
        new FooterLink('https://www.facebook.com/jozsef.kanyo.3', 'fa fa-facebook-square'),
    ];
}
