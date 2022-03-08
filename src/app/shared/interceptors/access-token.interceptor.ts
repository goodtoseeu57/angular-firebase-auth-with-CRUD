import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { switchMap, take } from "rxjs/operators";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private angularAuth: AngularFireAuth) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.angularAuth.idToken.pipe(
      take(1),
      switchMap((token: any) => {
        if (token) {
          request = request.clone({
            setHeaders: {Authorization: `${token}`}
          });
        }
        return next.handle(request);
      })
    );
  }
}
