import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http'
import { AuthenticationService } from '../authentication/authentication.service'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Token } from '../../models/token/token'
import { Global } from '../../models/global/global'

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor (
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  intercept (
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: Token = JSON.parse(localStorage.getItem('fc_key'))
    if (token) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + token.access_token
        )
      })
    }

    request = request.clone({
      url: Global.apiGeepyConnect + request.url
    })

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 403 || error.status == 401) {
          this.authenticationService.removeToken()
          this.router.navigate([''])
        }
        return throwError(error)
      })
    )
  }
}
