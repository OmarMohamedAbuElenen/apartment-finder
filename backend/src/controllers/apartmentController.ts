import { Request, Response } from 'express';
import { getRepository, Like  } from 'typeorm';
import { Apartment } from '../entities/Apartment';


const generateExternalID = () : string => {
    const min = 100; 
    const max = 900; 

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber.toString();
}

export const listApartments = async (req: Request, res: Response) => {
    try {
        const apartmentRepository = getRepository(Apartment);
        const page = parseInt(req.query.page as string, 10) || 1;
        const pageSize = parseInt(req.query.pageSize as string, 10) || 10;
        const query = req.query.query as string;
        const skip = (page - 1) * pageSize;

        const where = query
        ? [{ name: Like(`%${query}%`) }, { project: Like(`%${query}%`) }, { external_id: Like(`%${query}%`) }]
        : {};
        const [apartments, total] = await apartmentRepository.findAndCount({
            where,
            skip,
            take: pageSize,
        });
        const totalPages = Math.ceil(total / pageSize);
        res.json({
            data: apartments,
            meta: {
                page,
                pageSize,
                total,
                totalPages,
            },
        });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const getApartmentDetails = async (req: Request, res: Response) => {
    try {
        const apartmentRepository = getRepository(Apartment);
        const apartment = await apartmentRepository.findOne({ where: { external_id: req.params.externalId } });
        if (apartment) {
            res.json(apartment);
        } else {
            res.status(404).json({ error: 'Apartment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const createApartment = async (req: Request, res: Response) => {
    try {
        const apartmentRepository = getRepository(Apartment);
        const newApartment = apartmentRepository.create(req.body);
        const apartmentExternalId = generateExternalID();
        const savedApartment = await apartmentRepository.save({...newApartment, external_id:apartmentExternalId});
        res.status(201).json(savedApartment);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong while adding the apartment' });
    }
};