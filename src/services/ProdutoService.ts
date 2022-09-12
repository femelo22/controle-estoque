import { Categoria } from "../entities/Categoria";
import { Fornecedor } from "../entities/Fornecedor";
import { Produto } from "../entities/Produto"
import { produtoRepository } from "../repositories/ProdutoRepository";
import { CategoriaService } from "./CategoriaService";
import { FornecedorService } from "./FornecedorService";

type ProdutoRequest = {
    id?: number;
    nome: string;
    preco: number;
    quantidade: number;
    estoqueMin: number;
    idFornecedor: number;
    idCategoria: number;
}

export class ProdutoService {

    async save(produto: ProdutoRequest): Promise<Produto | Error> {

        const nome = produto.nome

        if(await produtoRepository.findOneBy({ nome })) {
            return new Error(`${nome} already exists`);
        }

        const categoriaService = new CategoriaService();
        const categoria = await categoriaService.findById(produto.idCategoria);

        const fornecedorService = new FornecedorService();
        const fornecedor = await fornecedorService.findById(produto.idFornecedor);

        var newProduto = produtoRepository.create(produto);

        if(fornecedor instanceof Fornecedor) {
            newProduto.fornecedor = fornecedor;
        } else {
            return new Error(`Fornecedor ${produto.idFornecedor} not found`);
        }

        if(categoria instanceof Categoria) {
            newProduto.categoria = categoria;
        } else {
            return new Error(`Categoria ${produto.idCategoria} not found`);
        }

        await produtoRepository.save(newProduto);

        return newProduto;
    }

    async findAll(): Promise<Produto[]> {

        const produtos = await produtoRepository.find();

        return produtos;
    }

    async findById(id: number): Promise<Produto | Error> {

        const produto = await produtoRepository.findOneBy({ id });

        if(!produto) {
            return new Error(`Product not found`)
        }

        return produto;
    }

    async delete(id: number): Promise<void | Error> {

        const produto = await produtoRepository.findOneBy({ id });

        if(!produto) {
            return new Error(`Product not found`)
        }

        await produtoRepository.delete(produto);
    }

}