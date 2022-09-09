import { Usuario } from "../entities/Usuario"
import { usuarioRepository } from "../repositories/UsuarioRepository"

type UsuarioRequest = {
    id?: number
    nome: string
    cpf: string
    email: number
    username: string
    senha: string
    cep?: string
    numero?: string
    complemento?: string
    rua?: string
    bairro?: string
    cidade?: string
    estado?: string
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

    async update({ nome, cpf, email, senha, username, cep, numero, complemento, rua, bairro, cidade, estado }: UsuarioRequest, id: number): Promise<Usuario | Error> {

        const user = await usuarioRepository.findOneBy({ id });
  
        if(!user) {
            return new Error(`No usuario found with id ${id}`);
        }

        user.nome = nome ? nome : user.nome
        user.cpf = cpf ? cpf : user.cpf
        user.email = email ? email : user.email
        user.senha = senha ? senha : user.senha
        user.username = username ? username : user.username
        user.cep = cep ? cep : user.cep
        user.numero = numero ? numero : user.numero
        user.complemento = complemento ? complemento : user.complemento
        user.rua = rua ? rua : user.rua
        user.estado = estado ? estado : user.estado
        user.bairro = bairro ? bairro : user.bairro
        user.cidade = cidade ? cidade : user.cidade

        await usuarioRepository.save(user);

        return user;
    }
}