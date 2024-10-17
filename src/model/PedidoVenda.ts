/**
 * Classe que representa um Pedido de Venda.
 */
export class PedidoVenda {

    /* Atributos */
    /* Identificador do Pedido */
    private idPedido: number = 0;
    /* identificador do carro */
    private idCarro: number = 0;
    /* identificador do cliente */
    private idCliente: number = 0;
    /* data do pedido */
    private dataPedido: Date;
    /* valor do pedido*/
    private valorPedido: number;
    
  

    /**
     * Construtor da classe PedidoVenda
     * @param idPedido identificador do Pedido
     * @param IdCarro identificador do Carro
     * @param idCliente identificador do Cliente
     * @param dataPedido data do pedido
     * @param valorPedido valor do pedido
     */
    constructor(
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido: number,

    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do pedido
     * @returns o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do Pedido
     * @param idPedido novo identificado do Pedido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Recupera o identificador do Carro
     * @returns o identificador do Carro
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Atribui um valor ao identificador do carro
     * @param idCarro novo identificado do carro
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do Pedido
     * @param idCliente novo identificado do Pedido
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna a data do pedido
     *
     * @returns {Date} O nome do cliente
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido
     * 
     * @param dataPedido - A data do pedido a ser definida
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor do pedido
     *
     * @returns {Number} O valor do pedido
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido
     *
     * @param valorPedido - O valor do pedido a ser definido
     */
    public setValorPedido(cpf: number): void {
        this.valorPedido = this.valorPedido;
    }

}