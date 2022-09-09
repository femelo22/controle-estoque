import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1662691904908 implements MigrationInterface {
    name = 'defaut1662691904908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compra" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "status" "public"."compra_status_enum" NOT NULL DEFAULT 'emitida', "dataCompra" TIMESTAMP NOT NULL DEFAULT now(), "usuario_id" integer, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_aca90c481b29b1c8a4bda31f3db" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_aca90c481b29b1c8a4bda31f3db"`);
        await queryRunner.query(`DROP TABLE "compra"`);
    }

}
