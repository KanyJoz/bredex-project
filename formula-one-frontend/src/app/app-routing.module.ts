import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: () => import('./partials/partials.module').then(m => m.PartialsModule),
    },
    {
        path: 'racer-teams',
        loadChildren: () => import('./racer-teams/racer-teams.module').then(m => m.RacerTeamsModule),
    },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
