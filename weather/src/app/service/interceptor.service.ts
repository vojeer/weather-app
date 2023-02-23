import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("err")

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errormsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errormsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errormsg = `Error Code: ${error.status},  Message: ${error.message}`;

        }

        console.log(errormsg);
        return throwError(() => {
        
        });
      })
    );
  }
}
