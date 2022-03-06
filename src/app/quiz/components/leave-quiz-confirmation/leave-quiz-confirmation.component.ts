import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-quiz-confirmation',
  templateUrl: './leave-quiz-confirmation.component.html',
  styleUrls: ['./leave-quiz-confirmation.component.scss'],
})
export class LeaveQuizConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<LeaveQuizConfirmationComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
