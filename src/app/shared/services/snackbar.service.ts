import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})


export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {
  }

  showSnackBar(message: string, cssClass: string) {
    this.snackbar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [cssClass]
    }
    );
  }
}
