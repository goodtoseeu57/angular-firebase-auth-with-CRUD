import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { SnackbarService } from "../../../../../shared/services/snackbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private angularFireAuth: AngularFireAuth, private router: Router, private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]]
    })
  }

  logIn() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
        console.log(res);
        this.router.navigateByUrl('private/dashboard');
      }).catch(err => {
        this.snackBarService.showSnackBar('Sorry something went wrong', 'failureCssSnackBar');
      });
    }
  }

}
