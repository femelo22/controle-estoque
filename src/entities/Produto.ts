import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "./Categoria"
import { Fornecedor } from "./Fornecedor"
import { Venda } from "./Venda"

@Entity()
export class Produto {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "text",
        nullable: false,
    })
    nome: string

    @Column({
        type: "decimal",
        precision: 2
    })
    preco: number

    @Column({
        type: "integer"
    })
    quantidade: number

    @Column({
        type: "integer"
    })
    estoqueMin: number

    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    @JoinColumn({ name: "categoria_id"})
    categoria: Categoria;


    @ManyToOne(() => Fornecedor, fornecedor => fornecedor.produtos)
    @JoinColumn({ name: "fornecedor_id"})
    fornecedor: Fornecedor

    @ManyToMany(() => Venda, venda => venda.produtos)
    vendas: Venda[]
}