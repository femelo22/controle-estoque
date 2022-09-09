import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "./Produto"
import { Usuario } from "./Usuario"

@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    id: number
 
    @Column({
        type: "decimal",
        precision: 2
    })
    valor: number

        
    @ManyToOne(() => Usuario, usuario => usuario.vendas)
    @JoinColumn({ name: "usuario_id"})
    usuario: Usuario

    @ManyToMany(() => Produto, produto => produto.vendas)
    @JoinTable({
        name: 'produto_venda',
        joinColumn: {
            name: 'produto_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'venda_id',
            referencedColumnName: 'id'
        }
    })
    produtos: Produto[]

    @CreateDateColumn()
    dataVenda: Date
}