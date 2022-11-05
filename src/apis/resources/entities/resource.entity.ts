import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Resources extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    text: string;

    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}