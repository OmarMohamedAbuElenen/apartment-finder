import express from 'express';
import {
    listApartments,
    getApartmentDetails,
    createApartment,
} from '../controllers/apartmentController';

const router = express.Router();

router.get('/', listApartments);
router.get('/:externalId', getApartmentDetails);
router.post('/', createApartment);

export default router;