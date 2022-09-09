import { Request, Response } from 'express';
import { CategoriaService } from '../services/CategoriaService';

export class CategoriaController {

    async save(request: Request, response: Response) {
        const nome = request.body;

        const service = new CategoriaService();

        const result = await service.create(nome);

        if(result instanceof Error) {
            return response.status(400).json({
                message: result.message
            });
        }

        return response.status(200).json(result);
    }

}