import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';

import { LocalStorageJwtService } from './local-storage-jwt.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
	constructor(private localStorage: LocalStorageJwtService, private store: Store<any>) { }

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
		return next.handle(request)
			.pipe(
			catchError((error, caught) => {
				if (error instanceof HttpErrorResponse) {
					switch (error.status) {
						case 401:
							this.store.dispatch({
								type: '[ngrx-error] THROW_401_ERROR',
								payload: error
							});
							break;
						default:
							of(error);
							break;
					}
				}
				return of(error);
			})
			);
	}
}
