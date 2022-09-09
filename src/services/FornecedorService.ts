import { Fornecedor } from "../entities/Fornecedor"
import { fornecedorRepository } from "../repositories/FornecedorRepository"

type FornecedorRequest = {
    id?: number
    nome: string
    cnpj: string
    cep?: string
    numero?: string
    complemento?: string
    rua?: string
    bairro?: string
    cidade?: string
    estado?: string
}

export class FornecedorService {

    async create(fornecedor: FornecedorRequest): Promise<Fornecedor | Error> {

        const cnpj = fornecedor.cnpj

        if(await fornecedorRepository.findOneBy({ cnpj })) {
            return new Error(`CNPJ ${cnpj} already exists`);
        }

        const newFornecedor = fornecedorRepository.create(fornecedor);

        await fornecedorRepository.save(newFornecedor);

        return newFornecedor;
    } 


    async findAll(): Promise<Fornecedor[]> {
        return await fornecedorRepository.find();
    }


    async findById(id: number): Promise<Fornecedor | Error> {

        const fornecedor = await fornecedorRepository.findOneBy({ id });

        if(!fornecedor) {
            return new Error(`No Fornecedor found with id ${id}`);
        }
        
        return fornecedor;
    }

    async update({ nome, cnpj, cep, numero, complemento, rua, bairro, cidade, estado }: FornecedorRequest, id: number): Promise<Fornecedor | Error> {

        const fornecedor = await fornecedorRepository.findOneBy({ id });
  
        if(!fornecedor) {
            return new Error(`No Fornecedor found with id ${id}`);
        }

        fornecedor.nome = nome ? nome : fornecedor.nome
        fornecedor.cnpj = cnpj ? cnpj : fornecedor.cnpj
        fornecedor.cep = cep ? cep : fornecedor.cep
        fornecedor.numero = numero ? numero : fornecedor.numero
        fornecedor.complemento = complemento ? complemento : fornecedor.complemento
        fornecedor.rua = rua ? rua : fornecedor.rua
        fornecedor.estado = estado ? estado : fornecedor.estado
        fornecedor.bairro = bairro ? bairro : fornecedor.bairro
        fornecedor.cidade = cidade ? cidade : fornecedor.cidade

        await fornecedorRepository.save(fornecedor);

        return fornecedor;
    }
}