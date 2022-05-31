import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { urlForThumbnail } from '../utils/image';
import classes from '../utils/classes';
import Grid from "@material-ui/core/Grid";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography sx={classes.productdesc}>{product.name}</Typography>
            <Typography sx={classes.productprice}>₹{product.price}<br/></Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
      <Grid container justify="center">
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={classes.addtocartbutton}
          onClick={() => addToCartHandler(product)}
          
        >
          Add to cart
        </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
