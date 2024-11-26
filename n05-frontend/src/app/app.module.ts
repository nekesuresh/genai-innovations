import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { SummaryComponent } from './summary/summary.component';
import { routes } from './app.routes'; // Import your routes

@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent,
    DashboardComponent,
    ReportsComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure routes here
    FormsModule, // Required for [(ngModel)]
    //HttpClientModule, // Required for HTTP communication
  ],
 providers: [provideHttpClient()],
 bootstrap: [AppComponent], // Bootstrap the AppComponent
})
export class AppModule {}
