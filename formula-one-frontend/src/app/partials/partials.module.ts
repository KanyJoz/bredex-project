import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ]
})
export class PartialsModule { }
