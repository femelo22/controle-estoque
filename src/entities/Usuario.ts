import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Venda } from "./Venda"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "text",
        nullable: false
    })
    nome: string

    @Column({
        type: "text",
        nullable: false
    })
    cpf: string

    @Column({
        type: "text",
        nullable: false
    })
    email: number

    @Column({
        type: "text",
        nullable: false
    })
    username: string

    @Column({
        type: "text",
        nullable: false
    })
    senha: string

    @Column()
    cep: string

    @Column()
    numero: string

    @Column()
    complemento: string

    @Column()
    rua: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    estado: string

    @OneToMany(() => Venda, venda => venda.usuario)
    vendas: Venda[]
}
