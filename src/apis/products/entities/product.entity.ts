import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Products extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    categoryId: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    price: number;

    @CreateDateColumn({  type: 'datetime', default: () => new Date() })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;
}