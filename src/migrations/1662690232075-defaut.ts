import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662690232075 implements MigrationInterface {
    name = 'defaut1662690232075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "venda" ADD "usuario_id" integer`);
        await queryRunner.query(`ALTER TABLE "venda" ADD CONSTRAINT "FK_e0ff83bb523a4c22a4c06442e63" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "venda" DROP CONSTRAINT "FK_e0ff83bb523a4c22a4c06442e63"`);
        await queryRunner.query(`ALTER TABLE "venda" DROP COLUMN "usuario_id"`);
    }

}
