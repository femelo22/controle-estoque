import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

export enum StatusCompra {
    EMITIDA = 'emitida',
    CANCELADA = 'cancelada',
    FINALIZADA = 'finalizada',
}


@Entity()
export class Compra {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'decimal',
        nullable: false
    })
    valor: number;

    @Column({
        type: 'enum',
        enum: StatusCompra,
        default: StatusCompra.EMITIDA
    })
    status: StatusCompra;

    @CreateDateColumn()
    dataCompra: Date

    @ManyToOne(() => Usuario, usuario => usuario.compras)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario
}