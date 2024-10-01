/**
 * Classe que representa um cliente.
 */
export class Cliente {

    /* Atributos */
    /* Identificador do cliente */
    private idCliente: number = 0;
    /* nome do cliente */
    private nome: string;
    /* cpf do cliente */
    private cpf: string;
    /* telefone do cliente */
    private telefone: string;
    
  

    /**
     * Construtor da classe Cliente
     * 
     * @param nome nome do cliente
     * @param cpf cpf do cliente
     * @param telefone telefone do cliente
     */
    constructor(
        nome: string,
        cpf: string,
        telefone: string,

    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do cliente
     * @param idCliente novo identificado do cliente
     */
    public setIdCarro(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna o nome do cliente
     *
     * @returns {string} O nome do cliente
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente
     * 
     * @param nome - O nome do cliente a ser definido
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o CPF do cliente
     *
     * @returns {string} O Cpf do cliente
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o cpf do cliente
     *
     * @param cpf - O Cpf do cliente a ser definido
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * Retorna o ano do carro.
     *
     * @returns O telefone do cliente a ser definido
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente
     * 
     * @param telefone - O telefone do cliente a ser definido
     */
    public settelefone(telefone: string): void {
        this.telefone = telefone;
    }

}