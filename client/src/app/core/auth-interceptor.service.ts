import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { LoaderService } from '../utility/services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private loader: LoaderService,
        private snakeBar: MatSnackBar,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
        const idToken = localStorage.getItem('usr_tkn');
        const prefix = environment.base_href;
        // centralized API path, change on deployment
        var cloned = req.clone({ url: prefix + req.url })

        if (idToken != null) cloned = cloned.clone({ headers: req.headers.set("Authorization", `Bearer ${idToken}`) });
        this.loader.show();

        return next.handle(cloned).pipe(
            tap(
                event => {
                    // ignore response with report progress
                    if (!(event instanceof HttpResponse) || req.reportProgress) return;
                    // show toast on update or delete
                    this.loader.hide();
                },
                err => {
                    let resError = err.error || {};
                    if (err instanceof HttpErrorResponse && err.status == 401) {
                        localStorage.clear();
                        sessionStorage.clear();
                        // TODO: 
                        this.router.navigateByUrl('/login');
                    }
                    // hide progress bar
                    this.loader.hide();
                }
            ),
            catchError(res => (res instanceof HttpErrorResponse) ? throwError(res.error) : res)
        );
    }
}
