"use client";

import { useParams } from 'next/navigation';
import * as React from 'react';
import Link from 'next/link';
import { getApartmentDetails } from '@/app/utils/api';
import {
    Container,
    Typography,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import { Apartment } from '@/app/types/apartment';
import AspectRatio from '@mui/joy/AspectRatio';
import CircularProgress from '@mui/material/CircularProgress';


const ApartmentDetails = () => {
    const params = useParams();
    const id = params.id as string;
    const [apartment, setApartment] = React.useState<Apartment | null>(null);

    React.useEffect(() => {
        const fetchApartment = async () => {
            const data = await getApartmentDetails(id);
            setApartment(data);
        };
        fetchApartment();
    }, [id]);

    if (!apartment) return <Container> <CircularProgress /></Container>;

    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                {apartment.name}
            </Typography>
            <AspectRatio ratio="2">
                <img
                    src={apartment.image_url}
                    loading="lazy"
                    alt="apartment image"
                />
            </AspectRatio>
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" fontWeight="bold">
                        Price: {apartment.price} EGP
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Location: {apartment.location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Project: {apartment.project}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Area: {apartment.area} sqm
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {apartment.description}
                    </Typography>
                </CardContent>
            </Card>
            <Link href="/" passHref>
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    Back to Listings
                </Button>
            </Link>
        </Container>
    );
}

export default ApartmentDetails;