import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NavComponent } from './shared/nav/nav.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';

import { BootstrapModule } from './shared//bootstrapModules/bootstrap.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProdutoService } from './services/produto.service';
import { MockBackEnd } from './mock/mock.backEnd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutoComponent,
    CarrinhoComponent,
    NavComponent,
    VitrineComponent,
    UsuarioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackEnd,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
