import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent} from './components/carrinho/carrinho.component';
import { VitrineComponent} from './components/vitrine/vitrine.component';
import { LoginComponent} from './components/login/login.component';
import { ProdutoComponent} from './components/produto/produto.component';;
import { UsuarioComponent} from './components/usuario/usuario.component';;

const routes: Routes = [
  {
    path:'',
    component: VitrineComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'produto',
    component: ProdutoComponent
  },
  {
    path:'carrinho',
    component: CarrinhoComponent
  },
  {
    path:'usuario',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
