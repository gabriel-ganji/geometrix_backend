import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column({ unique: true })
    phone: string;

    @Column({ unique: true })
    email: string;

    @Column({ length: 255 })
    passwordHash: string;

    @Column({ default: true })
    active: boolean;

    @Column({ default: "" })
    phaseId: string;

    @Column({ default: "" })
    levelId: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

}