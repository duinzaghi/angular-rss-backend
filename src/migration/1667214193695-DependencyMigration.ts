import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class DependencyMigration1667214193695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "dependencies",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "predecessorId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "successorId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "type",
                    type: "int",
                    isNullable: true,
                    default: 0
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
        await queryRunner.dropTable("dependencies");
    }

}
