import express from 'express';
import cors from 'cors';
import apartmentRoutes from './routes/apartmentRoutes';
import { initializeDatabase } from './db/database';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());


initializeDatabase().then(() => {
    console.log('Database initialized');
});

app.use('/apartments', apartmentRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started succuessfully and running on http://localhost:${PORT}`);
});