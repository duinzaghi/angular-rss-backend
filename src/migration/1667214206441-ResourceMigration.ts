import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class ResourceMigration1667214206441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "resources",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "text",
                    type: "varchar",
                    isNullable: true
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
        await queryRunner.dropTable("resources");
    }

}
