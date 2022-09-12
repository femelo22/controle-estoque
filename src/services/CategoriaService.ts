import { Categoria } from "../entities/Categoria"
import { categoriaRepository } from "../repositories/CategoriaRepository"

type CategoriaRequest = {
    id? : number,
    nome: string
}

export class CategoriaService {

    async list(): Promise<Categoria[]> {
        return await categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria | Error> {
        const categoria = await categoriaRepository.findOneBy({ id });

        if(!categoria) {
            return new Error("Categoria not found")
        }

        return categoria;
    }

    async create({ nome } : CategoriaRequest): Promise<Categoria | Error> {

        if(await categoriaRepository.findOneBy({ nome })) {
            return new Error("Categoria already exists")
        }

        const categoria = categoriaRepository.create({ nome });

        await categoriaRepository.save(categoria);

        return categoria;
    }

    async delete(id: number): Promise<void | Error> {
        const categoria = await categoriaRepository.findOneBy({ id });

        if(!categoria) {
            return new Error("Categoria not found")
        }

        await categoriaRepository.delete(categoria);
    }
}