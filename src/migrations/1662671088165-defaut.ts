import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662671088165 implements MigrationInterface {
    name = 'defaut1662671088165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" ADD "fornecedor_id" integer`);
        await queryRunner.query(`ALTER TABLE "produto" ADD CONSTRAINT "FK_3b8c0aa3f111916ce1f7ec3acc6" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP CONSTRAINT "FK_3b8c0aa3f111916ce1f7ec3acc6"`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "fornecedor_id"`);
    }

}
