import { Categoria } from "../entities/Categoria"
import { categoriaRepository } from "../repositories/CategoriaRepository"

type CategoriaRequest = {
    id? : number,
    nome: string
}

export class CategoriaService {

    async create({ nome } : CategoriaRequest): Promise<Categoria | Error> {

        if(await categoriaRepository.findOneBy({ nome })) {
            return new Error("Categoria already exists")
        }

        const categoria = categoriaRepository.create({ nome });

        await categoriaRepository.save(categoria);

        return categoria;
    }
}