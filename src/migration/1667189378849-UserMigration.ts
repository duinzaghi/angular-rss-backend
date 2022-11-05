import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class UserMigration1667189378849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
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
        await queryRunner.dropTable("users");
    }

}
