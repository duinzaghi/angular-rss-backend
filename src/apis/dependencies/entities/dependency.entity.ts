import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Dependencies extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    predecessorId: number;

    @Column()
    successorId: number;

    @Column()
    type: number;

    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}