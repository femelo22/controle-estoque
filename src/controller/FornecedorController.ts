import { Request, Response } from "express"
import { FornecedorService } from "../services/FornecedorService"

export class FornecedorController {

    async findAll(request: Request, response: Response) {
        const service = new FornecedorService();

        return response.json(await service.findAll());
    }


    async findById(request: Request, response: Response) {
        const service = new FornecedorService();

        const { id } = request.params;

        const result = await service.findById(id);

        if(result instanceof Error) {
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }


    async save(request: Request, response: Response) {
        const fornecedor = request.body;

        const service = new FornecedorService();

        const result = await service.create(fornecedor);

        if(result instanceof Error) {
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }


    async update(request: Request, response: Response) {
        const fornecedor = request.body;
        const { id }  = request.params

        const service = new FornecedorService();

        const result = await service.update(fornecedor, id);

        if(result instanceof Error) {
            return response.status(400).json({
                message: result.message
            })
        }

        return response.status(201).json(result)
    }

}