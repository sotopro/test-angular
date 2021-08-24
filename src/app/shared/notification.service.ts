import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig  } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  }
  success(message: string) {
    this.config['panelClass'] = ['notification', 'success'];
    this._snackBar.open(message, '',this.config);
  }

  error(message: string) {
    this.config['panelClass'] = ['notification', 'error'];
    this._snackBar.open(message, '', this.config);
  }
}
