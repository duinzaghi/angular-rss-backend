import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class ResourceAssignmentMigration1667214219960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "resource_assignments",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "taskId",
                    type: "int",
                },
                {
                    name: "resourceId",
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
        await queryRunner.dropTable("resource_assignments");
    }

}
