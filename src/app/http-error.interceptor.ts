import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { retry, catchError } from 'rxjs/operators';
  
  export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1), // retrying connection before failing
          catchError((error: HttpErrorResponse) => {
            let errorMessage = 'Website error, please try again!';
            if (error.error instanceof ErrorEvent) {
              // front-end error
              errorMessage = `Network Error Occured: ${error.error.message}`;
            } else {
              // back-end error
              errorMessage = `Something Went Wrong!`;
              console.log("Error for url:" + error.message);
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          })
        )
    }
  }