import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Employees extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    headId: number;

    @Column({ nullable: true})
    fullName: string;

    @Column({ nullable: true})
    position: string;

    @Column({ nullable: true})
    city: string;

    @Column({ nullable: true})
    state: string;

    @Column({ nullable: true})
    email: string;

    @Column({ nullable: true})
    skype: string;

    @Column({ nullable: true})
    mobilePhone: string;

    @Column({ nullable: true})
    birthDate: string;

    @Column({ nullable: true})
    hireDate: string;

    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}