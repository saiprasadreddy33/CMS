import { Component, OnInit, ViewChild } from '@angular/core';
import { WarningMessageComponent } from '../shared/warning-message/warning-message.component';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html'
})
export class TimesheetComponent implements OnInit {
onWarningDialogClosed() {
throw new Error('Method not implemented.');
}
  @ViewChild(WarningMessageComponent)
  warningMessageComponent!: WarningMessageComponent;
  displayDialog: boolean = false;
  newTimesheet: any = {};
  timesheets: any[] = [];
  currentDate: Date = new Date();
  isEditActive: boolean = false;
  editIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  showDialog() {
    this.displayDialog = true;
    this.isEditActive = false;
    this.newTimesheet = {};
  }

  hideDialog() {
    this.displayDialog = false;
  }

  editEntry(index: number) {
    const entry = this.timesheets[index];
    if (entry.resolvedTime && entry.finishedTime) {
      
        alert('This entry has already been edited and saved. You cannot edit it again.');
      
    } else {
      this.isEditActive = true;
      this.editIndex = index;
      this.newTimesheet = { ...entry };
      this.displayDialog = true;
    }
  }

  saveEntry() {
    if (this.isEditActive && this.editIndex !== -1) {
      this.timesheets[this.editIndex] = { ...this.newTimesheet };
      this.timesheets[this.editIndex].finishedTime = new Date();
    } else {
      const newEntry = { ...this.newTimesheet };
      newEntry.addedTime = new Date();
      newEntry.resolvedTime = null;
      newEntry.finishedTime = null;
      this.timesheets.push(newEntry);
    }
    this.hideDialog();
  }
}