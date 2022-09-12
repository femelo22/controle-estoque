import { Categoria } from "../entities/Categoria";
import { Fornecedor } from "../entities/Fornecedor";
import { Produto } from "../entities/Produto"
import { fornecedorRepository } from "../repositories/FornecedorRepository";
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

}