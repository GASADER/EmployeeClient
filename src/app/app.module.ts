import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NavberComponent } from './components/navber/navber.component';
import { EmployeeDashboardComponentComponent } from './employee-dashboard-component/employee-dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavberComponent,
    EmployeeDashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
