
import { Injectable } from '@angular/core';
import { Produto } from '../classes/produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }
    getAll() {
        return this.httpClient.get<Produto[]>('/api/produtos');
    }
}
