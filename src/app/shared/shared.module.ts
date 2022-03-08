import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { SnackbarService } from "./services/snackbar.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const sharedModules = [MatToolbarModule,
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  MatDialogModule,
  MatButtonModule, MatProgressSpinnerModule, ReactiveFormsModule, FormsModule, MatInputModule, MatIconModule, MatSnackBarModule, MatCardModule]

@NgModule({
  declarations: [],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ],
  providers: [AngularFireAuth, SnackbarService]
})
export class SharedModule {
}
