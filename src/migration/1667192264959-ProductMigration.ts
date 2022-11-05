import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class ProductMigration1667192264959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "categoryId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "int",
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                    default: 'GETDATE()'
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                    isNullable: true,
                    default: 'GETDATE()'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }
}
