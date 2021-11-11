import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Grid } from '@material-ui/core';

const PlaceOrder = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.order = service._id;
        data.status = 'pending';

        const url = `http://localhost:5000/placeOrder`;
        // const url = `https://quiet-hamlet-58430.herokuapp.com/placeOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })
    };


    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        // const url = `https://quiet-hamlet-58430.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])


    return (
        <Grid style={{ margin: '20px' }} spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                {/* <Card sx={{ maxWidth: 400, mt: 5, mb: 4 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={service.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>
                            <br />
                            <Typography variant="h6" color="" >
                                <i class="fas fa-dollar-sign">{service.price}</i>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> */}


                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={service.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>
                            <br />
                            <Typography variant="h6" color="" >
                                <i class="fas fa-dollar-sign">{service.price}</i>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button sx={{ mx: 'auto' }} size="large" color="primary">
                            Book
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8}>
                {/* <form className='border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="forName" className="form-label">Name</label>
                        <input defaultValue={user.displayName} {...register("name")} type="text" className="form-control" id="forName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forEmail" className="form-label">Email</label>
                        <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="forEmail" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forAddress" className="form-label">Address</label>
                        <input defaultValue="" {...register("address")} type="text" className="form-control" id="forAddress" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forDate" className="form-label">Date</label>
                        <input defaultValue="" {...register("date")} type="date" className="form-control" id="forDate" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forPhone" className="form-label">Phone</label>
                        <input defaultValue="" {...register("phone")} type="text" className="form-control" id="forPhone" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="forCity" className="form-label">City</label>
                        <input defaultValue="" {...register("city")} type="text" className="form-control" id="forCity" required />
                    </div>
                    <input className="btn btn-success" type="submit" value="Place Order" />
                </form> */}
            </Grid>
        </Grid>
    );
};

export default PlaceOrder;