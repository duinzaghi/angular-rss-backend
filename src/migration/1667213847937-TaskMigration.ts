import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class TaskMigration1667213847937 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tasks",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "parentId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "start",
                    type: "datetime",
                },
                {
                    name: "end",
                    type: "datetime",
                },
                {
                    name: "progress",
                    type: "int",
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
        await queryRunner.dropTable("tasks");
    }

}
