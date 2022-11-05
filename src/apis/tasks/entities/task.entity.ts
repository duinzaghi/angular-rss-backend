import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Tasks extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    parentId: string;

    @Column()
    title: string;

    @Column()
    start: string;

    @Column()
    end: string;

    @Column()
    progress: number;

    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}