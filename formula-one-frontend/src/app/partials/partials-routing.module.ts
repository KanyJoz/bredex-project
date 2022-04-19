import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const partialsRoutes: Routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(partialsRoutes)],
    exports: [RouterModule],
})
export class PartialsRoutingModule {}
