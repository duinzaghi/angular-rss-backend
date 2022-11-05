import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class ResourceAssignments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskId: number;

    @Column()
    resourceId: number;


    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}