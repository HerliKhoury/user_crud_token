import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User{
    @PrimaryGeneratedColumn("increment")
    id:number; 

    @Column({type: "varchar", length: 45, nullable: false})
    name: string;

    @Column({type: "varchar", length: 45, nullable: false})
    email: string;

    @Column({type: "varchar", length: 5, nullable: false})
    age: string | number;

    @Column({type: 'varchar', length: 120, nullable: false})
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted: number = getRounds(this.password); 

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}