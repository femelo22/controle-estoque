import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662669648806 implements MigrationInterface {
    name = 'defaut1662669648806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fornecedor" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "cnpj" text NOT NULL, "telefone" text NOT NULL, "cep" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "PK_5bff2d88b4e0ef84a6444b786a6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fornecedor"`);
    }

}
