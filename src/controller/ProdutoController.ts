import { Request, Response } from 'express';
import { ProdutoService } from '../services/ProdutoService';


export class ProdutoController {

    async create (req: Request, res: Response) {
        const produto = req.body;

        const service = new ProdutoService();

        const result = await service.save(produto);

        if(result instanceof Error) {
            return res.status(404).json({
                message: result.message
            });
        }

        return res.json(result);
    }

    async findAll(req: Request, res: Response) {
        const service = new ProdutoService();

        const result = await service.findAll();

        return res.json(result);
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        const service = new ProdutoService();

        const result = await service.findById(id);

        if(result instanceof Error) {
            return res.status(404).json({  
                message: result.message
            });
        }

        return res.json(result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new ProdutoService();

        const result = await service.delete(id);

        if(result instanceof Error) {
            return res.status(404).json({  
                message: result.message
            });
        }
        
        return res.status(204).send();
    }
}