import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { Grid } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Explore = (props) => {
    const { _id, name, description, img, price } = props.service;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 350, mt: 5, mb: 4 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <br />
                        <Typography variant="h6" color="" >
                            <i class="fas fa-dollar-sign">{price}</i>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <NavLink style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} to={`/placeorder/${_id}`}>
                        <Button variant="contained">Buy Now</Button>
                    </NavLink>
                </CardActions> */}
                <CardActions>
                    <NavLink style={{ textDecoration: 'none', color: '#2c2c2c', m: 'auto', fontSize: '21px' }} to={`/placeorder/${_id}`}>
                        <i class="fas fa-shopping-cart">  Buy Now</i>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Explore;