import { Usuario } from "../entities/Usuario"
import { usuarioRepository } from "../repositories/UsuarioRepository"

type UsuarioRequest = {
    id: number
    nome: string
    cpf: string
    email: number
    username: string
    senha: string
    cep: string
    numero: string
    complemento: string
    rua: string
    bairro: string
    cidade: string
    estado: string
}

export class UsuarioService {

    async create(usuario: UsuarioRequest): Promise<Usuario | Error> {

        const username = usuario.username
        const email = usuario.email

        if(await usuarioRepository.findOneBy({ username })) {
            return new Error(`Username ${username} already exists`);
        }

        if(await usuarioRepository.findOneBy({ email })) {
            return new Error(`Email ${email} already exists`);
        }
        
        const newUsuario = usuarioRepository.create(usuario);

        await usuarioRepository.save(newUsuario);

        return newUsuario;
    } 


    async findAll(): Promise<Usuario[]> {
        return await usuarioRepository.find();
    }


    async findById(id: number): Promise<Usuario | Error> {

        const usuario = await usuarioRepository.findOneBy({ id });

        if(!usuario) {
            return new Error(`No usuario found with id ${id}`);
        }
        
        return usuario;
    }
}