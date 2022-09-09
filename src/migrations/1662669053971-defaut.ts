import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662669053971 implements MigrationInterface {
    name = 'defaut1662669053971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "cpf" text NOT NULL, "email" text NOT NULL, "username" text NOT NULL, "senha" text NOT NULL, "cep" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
