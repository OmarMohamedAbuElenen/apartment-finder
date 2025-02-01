import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Apartment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('float')
    price!: number;

    @Column()
    location!: string;

    @Column()
    image_url!: string;

    @Column({ unique: true })
    external_id!: string;

    @Column()
    project!: string;

    @Column()
    area!: number;
}