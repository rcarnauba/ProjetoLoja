import { Produto } from '../classes/produto';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';

export class Constants {
    dateNow : Date = new Date();

    public static get PRODUTOS(): Produto[] {
        return [
        {  codigoProduto:1, descricao: 'Smartphone Motorola Moto G 5S Dual Chip Android 7.1.1 Nougat Tela 5.2" Snapdragon 430 32GB 4G Câmera 16MP - Dourado',fator:'A', valor : '10.00' , nomeProduto: 'Smartphone Motorola Moto G 5S Dual Chip Android 7.1.1 Nougat Tela 5.2" Snapdragon 430 32GB 4G Câmera 16MP - Dourado', idProduto:'123456', dataCadastro: new Date() , imagemProduto:''},
        {  codigoProduto:1, descricao: 'Bola de futebol',fator:'B', valor : '110.00' , nomeProduto: 'Bola de futebol', idProduto:'12333', dataCadastro:new Date() , imagemProduto:''},
        {  codigoProduto:1, descricao: 'Raquete de tenis',fator:'C', valor : '800.00' , nomeProduto: 'Raquete de tenis', idProduto:'12355', dataCadastro: new Date(), imagemProduto:''},
        {  codigoProduto:1, descricao: 'Camiseta de corrida',fator:'C', valor : '100.00' , nomeProduto: 'Camiseta dry fit', idProduto:'12355', dataCadastro:new Date() , imagemProduto:''}
    ];}
}