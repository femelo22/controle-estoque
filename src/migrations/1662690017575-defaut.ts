import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662690017575 implements MigrationInterface {
    name = 'defaut1662690017575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP CONSTRAINT "FK_525042bb1ec97c20d4120414662"`);
        await queryRunner.query(`CREATE TABLE "produto_venda" ("produto_id" integer NOT NULL, "venda_id" integer NOT NULL, CONSTRAINT "PK_79677c31ba69c07ab5b57fb2187" PRIMARY KEY ("produto_id", "venda_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7e1e6cfd6d271deb046475e0f2" ON "produto_venda" ("produto_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_5591bd6a1747f83ff897c3045f" ON "produto_venda" ("venda_id") `);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "vendaId"`);
        await queryRunner.query(`ALTER TABLE "produto_venda" ADD CONSTRAINT "FK_7e1e6cfd6d271deb046475e0f23" FOREIGN KEY ("produto_id") REFERENCES "venda"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "produto_venda" ADD CONSTRAINT "FK_5591bd6a1747f83ff897c3045fc" FOREIGN KEY ("venda_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto_venda" DROP CONSTRAINT "FK_5591bd6a1747f83ff897c3045fc"`);
        await queryRunner.query(`ALTER TABLE "produto_venda" DROP CONSTRAINT "FK_7e1e6cfd6d271deb046475e0f23"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "vendaId" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5591bd6a1747f83ff897c3045f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7e1e6cfd6d271deb046475e0f2"`);
        await queryRunner.query(`DROP TABLE "produto_venda"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD CONSTRAINT "FK_525042bb1ec97c20d4120414662" FOREIGN KEY ("vendaId") REFERENCES "venda"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
