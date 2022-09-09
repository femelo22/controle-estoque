import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "./Produto"

@Entity()
export class Fornecedor {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "text",
        nullable: false,
    })
    nome: string

    @Column({
        type: "text",
        nullable: false,
    })
    cnpj: string

    @Column({
        type: "text",
        nullable: false,
    })
    telefone: string

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

    @OneToMany(() => Produto, produto => produto.fornecedor)
    produtos: Produto[]
}