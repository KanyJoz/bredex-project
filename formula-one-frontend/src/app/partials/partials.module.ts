import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PartialsRoutingModule } from './partials-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './header/dropdown.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DropdownDirective,
  ],
  imports: [
    SharedModule,
    PartialsRoutingModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PartialsRoutingModule,
  ]
})
export class PartialsModule { }
