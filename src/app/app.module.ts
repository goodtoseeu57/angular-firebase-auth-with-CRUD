import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivateComponent } from './features/private/private.component';
import { SharedModule } from "./shared/shared.module";
import { PrivateModule } from "./features/private/private.module";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { PublicModule } from "./features/public/public.module";
import { ApiService } from "./shared/services/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AccessTokenInterceptor } from "./shared/interceptors/access-token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PrivateModule,
    PublicModule,
    HttpClientModule
  ],
  providers: [AngularFireAuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
