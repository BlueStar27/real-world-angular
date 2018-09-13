import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LocalStorageJwtService } from './local-storage-jwt.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private localStorage: LocalStorageJwtService, private store: Store<any>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;
    this.localStorage.getItem().subscribe(t => (token = t));
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
