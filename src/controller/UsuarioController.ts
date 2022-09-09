import { NextFunction, Request, Response } from "express"
import { UsuarioService } from "../services/UsuarioService"

export class UsuarioController {

    async findAll(request: Request, response: Response) {
        const service = new UsuarioService();

        return response.json(await service.findAll());
    }


    async findById(request: Request, response: Response) {
        const service = new UsuarioService();

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
        const usuario = request.body;

        const service = new UsuarioService();

        const result = await service.create(usuario);

        if(result instanceof Error) {
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }


    async delete(request: Request, response: Response) {
        
    }
}