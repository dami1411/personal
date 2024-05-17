import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',  loadChildren: () => import('./@pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
];
