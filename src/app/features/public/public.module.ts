import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { LandingModule } from "./landing/pages/landing/landing.module";
import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from './landing/components/login/login.component';
import { RegisterComponent } from './landing/components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PublicModule {
}
