import { Component } from '@angular/core';

interface Attendance {
  date: Date;
  timeIn: string;
  timeOut: string;
  isValid: boolean;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  attendanceRecords: Attendance[] = [];

  validateAttendance() {
    console.log(this.attendanceRecords)
  }
}
