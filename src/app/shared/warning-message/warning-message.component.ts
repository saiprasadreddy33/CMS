import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  templateUrl: './warning-message.component.html'
})
export class WarningMessageComponent {
  displayDialog: boolean = false;
  message: string = '';

  showDialog(message: string) {
    this.message = message;
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }
}