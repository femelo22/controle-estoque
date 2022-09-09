import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662671748341 implements MigrationInterface {
    name = 'defaut1662671748341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venda" ("id" SERIAL NOT NULL, "dataVenda" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e54dc36860bef073e9ab638b444" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "venda"`);
    }

}
