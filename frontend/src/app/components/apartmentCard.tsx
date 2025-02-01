import * as React from 'react';
import Link from 'next/link';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

type Props ={
    readonly title: string;
    readonly location: string;
    readonly price: number;
    readonly imageUrl: string;
    readonly projectName: string;
    readonly externalId: string;
};

 const ApartmentCard = ({title, location, price, imageUrl, projectName,externalId }:Props) => {
  return (
    <Link href={`/apartments/${externalId}`} passHref>
    <Card variant="outlined" sx={{ maxHeight:400, maxWidth:400, minWidth: 320 , marginBottom: 2 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={imageUrl}
            loading="lazy"
            alt="apartment image"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{title}</Typography>
        <Typography level="body-sm">{location}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            {projectName}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
           {price} EGP
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
    </Link>
  );
}

export default ApartmentCard;