import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: '**', redirectTo: '/landing-page' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ToastModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
