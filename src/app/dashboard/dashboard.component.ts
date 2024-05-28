import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateToTimesheet() {
    this.router.navigate(['/timesheet']);
  }

  navigateToAttendance() {
    this.router.navigate(['/attendance']);
  }
}