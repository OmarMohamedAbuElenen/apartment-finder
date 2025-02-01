import axios from 'axios';
import { Apartment } from '../types/apartment';

type MetaProps = {
    readonly page: number;
    readonly pageSize: number;
    readonly total: number;
    readonly totalPages: number;
}

const API_URL = 'http://localhost:8000/apartments';
export const getApartments = async (query: string, page = 1, pageSize = 12): Promise<{ data: Apartment[]; meta: MetaProps }> => {
    const response = await axios.get(`${API_URL}?page=${page}&pageSize=${pageSize}&query=${query}`);
    return response.data;
};

export const getApartmentDetails = async (id: string): Promise<Apartment> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};