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


interface Request {
  url: string;
  method: string;
}

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private angularAuth: AngularFireAuth) {
  }

  intercept(request: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<Request>> {
    return this.angularAuth.idToken.pipe(
      take(1),
      switchMap((token: string | null) => {
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: `${token}` }
          });
        }
        return next.handle(request);
      })
    );
  }
}
