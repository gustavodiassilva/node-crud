import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1644333254035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "uid",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        //warning, run this just if you want drop  categories table. 
        //Be careful young padwan
        await queryRunner.dropTable("categories")
    }

}
