import { AppDataSource } from "../data-source";
import { Fornecedor } from "../entities/Fornecedor";

export const fornecedorRepository = AppDataSource.getRepository(Fornecedor);