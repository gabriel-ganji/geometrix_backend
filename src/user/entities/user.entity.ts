import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Column()
    phaseId: string;

    @Column()
    levelId: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

}