import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ApiService<T> {

  constructor(private http: HttpClient, private host: string, private route: string) {
  }

  post(body: T, additionalUrl: string): Observable<T> {
    let url = this.addAdditionalUrl(additionalUrl);
    return this.http.post<T>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  put(body: T, additionalUrl: string): Observable<T> {
    let url = this.addAdditionalUrl(additionalUrl);
    return this.http.put<T>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  patch(body: T, additionalUrl: string): Observable<T> {
    let url = this.addAdditionalUrl(additionalUrl);
    return this.http.patch<T>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }


  delete(additionalUrl: string, body?: T): Observable<T> {
    let url = this.addAdditionalUrl(additionalUrl);
    return this.http.delete<T>(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(additionalUrl: string): Observable<T> {
    let url = this.addAdditionalUrl(additionalUrl);
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  addAdditionalUrl(additionalUrl: string): string {
    const requestUrl = this.getRequestUrl();
    if (additionalUrl) {
      return `${requestUrl}${additionalUrl}`
    }
    return requestUrl;
  }


  getRequestUrl(): string {
    return `${this.host}${this.route}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
