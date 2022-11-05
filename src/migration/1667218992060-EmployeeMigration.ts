import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class EmployeeMigration1667218992060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "employees",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "headId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "fullName",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "position",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "city",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "state",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "skype",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "mobilePhone",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "birthDate",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "hireDate",
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
        await queryRunner.dropTable("employees");
    }

}
