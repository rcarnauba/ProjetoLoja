import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { Produto } from '../classes/produto';
import { Constants } from './mock.produto'

@Injectable()
export class MockBackEnd implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let produtos: Produto[] = Constants.PRODUTOS;

        return Observable.of(null).mergeMap(() => {

            if (request.url.endsWith('/api/produtos') && request.method === 'GET') {
                  return Observable.of(new HttpResponse({ status: 200, body: produtos }));
            }
            return next.handle(request);
        })
        .materialize()
        .delay(500)
        .dematerialize();
    }
}

export let mockBackEndProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackEnd,
    multi: true
};