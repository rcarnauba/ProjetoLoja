export class Produto 
{
    public codigoProduto : number;
    public idProduto: string;
    public nomeProduto: string;
    public descricao: string;
    public valor: string;
    public fator: string;
    public dataCadastro: Date;
    public imagemProduto: string;
    
    constructor(
        codigoProduto : number,
        idProduto: string,
        nomeProduto: string,
        descricao: string,
        valor: string,
        fator: string,
        dataCadastro: Date,
        imagemProduto: string
    )
    {
        this.codigoProduto = codigoProduto;
        this.idProduto = idProduto;
        this.nomeProduto = nomeProduto;
        this.descricao = descricao;
        this.valor = valor;
        this.fator = fator;
        this.dataCadastro = dataCadastro;
        this.imagemProduto = imagemProduto;
    }
   

}
