import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CircularProgress, Container } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                setIsLoading(false);
            })
    }, [])


    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = allProducts.filter(service => service._id !== id)
                    setAllProducts(remaining)
                }
            })
    }



    return (
        <Container>
            {!isLoading ?
                <Grid container spacing={{ xs: 12, md: 4, lg: 4 }} columns={{ xs: 12, sm: 6, md: 4, lg: 4 }}>

                    {
                        allProducts.map((product) =>
                            <div>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Card sx={{ maxWidth: 380, mt: 5, mb: 4, height: 450 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={product.img}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                                <br />
                                                <Typography variant="h6" color="" >
                                                    <i class="fas fa-dollar-sign">{product.price}</i>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button onClick={() => handleDelete(product._id)} color="error">delete this product</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    }

                </Grid>
                :
                <CircularProgress />
            }
        </Container>
    );
};

export default ManageProducts;




