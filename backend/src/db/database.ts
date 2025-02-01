import { createConnection } from 'typeorm';
import { Apartment } from '../entities/Apartment';

export const initializeDatabase = async () => {
    await createConnection({
        type: 'sqlite',
        database: './nawy.db',
        entities: [Apartment],
        synchronize: true,
        logging: true,
    });
    console.log('Database has been connected succefully');
};