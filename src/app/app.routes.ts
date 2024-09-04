import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/session-management/login/login.component';
import { DashboardComponent } from './pages/session-management/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: '', redirectTo: '/login', pathMatch: 'full'}
    
];
