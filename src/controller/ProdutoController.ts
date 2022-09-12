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
}