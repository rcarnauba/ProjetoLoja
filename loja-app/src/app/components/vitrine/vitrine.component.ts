import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../classes/produto';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    this.listarProdutos();
   }

 listarProdutos() {
   console.log("passoi");
        this.produtoService.getAll()
        .subscribe(produtos => { this.produtos = produtos; });
    }
}
