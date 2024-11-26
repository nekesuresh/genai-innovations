import { Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard'; // Import the guard

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Dashboard route with guard
  { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard] }, // Summary route with guard
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] }, // Reports route with guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
