import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({product}) {
  return (
    <Card sx={{ maxWidth: 295 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/public/image/image1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Link to={`/product/${product.slug}`}>

        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
        price:{product.price} Euro
       
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
       </CardActions>
    </Card>
  );
}