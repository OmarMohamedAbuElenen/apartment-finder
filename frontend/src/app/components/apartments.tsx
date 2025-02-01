"use client";

import * as React from 'react';
import { getApartments } from '../utils/api';
import { useSearchParams  } from 'next/navigation';
import {
    Pagination,
} from '@mui/material';
import ApartmentCard from '@/app/components/apartmentCard';
import styles from "@/app/styles/apartments.module.css"
import { Apartment } from '../types/apartment';


const ApartmentsList = () => {
    const params = useSearchParams();

    const query = params.get("query") || '';

    const [apartments, setApartments] = React.useState<Apartment[]>([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        const fetchApartments = async () => {
            const data = await getApartments(query, page);
            setApartments(data.data);
            setTotalPages(data.meta.totalPages);
        };
        fetchApartments();
    }, [page, query]);

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.apartmentscontainer}>
                {apartments.map((apartment) => (
                    <div key={apartment.id}> <ApartmentCard title={apartment.name} price={apartment.price} location={apartment.location} externalId={apartment.external_id} imageUrl={apartment.image_url} projectName={apartment.project} /> </div>
                ))}
            </div>
            {totalPages > 1 && <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
            />}
        </div>
    );
}

export default ApartmentsList;