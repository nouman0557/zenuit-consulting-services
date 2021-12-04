import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

    constructor(
        private route: Router,
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const logFormat = 'background: maroon; color: white';
        console.log('HTTP Request started');
        const errorMessage = "";

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {

                    console.log('error From Intercepter------>>', error)
                    switch (error.status) {
                        case HttpError.BadRequest:
                            console.error('%c Bad Request 400', logFormat);
                            break;

                        case HttpError.Unauthorized:
                            console.error('%c Unauthorized 401', logFormat);
                            break;

                        case HttpError.NotFound:
                            console.error('%c Not Found 404', logFormat);
                            break;

                        case HttpError.TimeOut:
                            console.error('%c TimeOut 408', logFormat);
                            break;

                        case HttpError.Forbidden:
                            console.error('%c Forbidden 403', logFormat);
                            break;

                        case HttpError.InternalServerError:
                            console.error('%c big bad 500', logFormat);
                            break;
                        default:
                            break;
                    }
                    return throwError(errorMessage);
                })
            );
    }

    setError(error: HttpErrorResponse): string {
        let errorMessage = 'Unknown error occured';
        if (error.error instanceof ErrorEvent) {
            // Client side error
            errorMessage = error.error.message;
        } else {
            // server side error
            if (error.status !== 0) {
                errorMessage = error.error;
            }
        }
        return errorMessage;
    }
}

export class HttpError {
    static BadRequest = 400;
    static Unauthorized = 401;
    static Forbidden = 403;
    static NotFound = 404;
    static TimeOut = 408;
    static Conflict = 409;
    static InternalServerError = 500;
}