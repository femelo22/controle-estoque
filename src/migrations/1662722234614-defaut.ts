import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662722234614 implements MigrationInterface {
    name = 'defaut1662722234614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" ADD CONSTRAINT "UQ_0a9942514087463668e9638bf90" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "UQ_28cd8597e57c8197d4929a98e7a" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "fornecedor" ADD CONSTRAINT "UQ_bd5160258fdcfd9564d5c1549fb" UNIQUE ("cnpj")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fornecedor" DROP CONSTRAINT "UQ_bd5160258fdcfd9564d5c1549fb"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "UQ_2863682842e688ca198eb25c124"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "UQ_28cd8597e57c8197d4929a98e7a"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP CONSTRAINT "UQ_0a9942514087463668e9638bf90"`);
    }

}
