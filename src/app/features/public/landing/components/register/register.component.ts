import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { SnackbarService } from "../../../../../shared/services/snackbar.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private angularFireAuth: AngularFireAuth, private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]]
    })
  }

  register() {
    if (this.registerForm.valid) {
      const {email, password} = this.registerForm.value;
      this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
        this.snackBarService.showSnackBar('User has been created', 'successCssSnackBar');
      }).catch(err => {
        this.snackBarService.showSnackBar('Sorry something went wrong', 'failureCssSnackBar');
      });
    }
  }


}
