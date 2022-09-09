import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662670482607 implements MigrationInterface {
    name = 'defaut1662670482607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "preco" numeric(2) NOT NULL, "quantidade" integer NOT NULL, "estoqueMin" integer NOT NULL, "categoria_id" integer, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "produto" ADD CONSTRAINT "FK_3a3aed3f734f4071c5fff367c43" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP CONSTRAINT "FK_3a3aed3f734f4071c5fff367c43"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
