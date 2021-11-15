import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Grid } from '@material-ui/core';
import './PlaceOrder.css'
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../../Shared/Footer/Footer'

const PlaceOrder = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { user, admin } = useAuth();

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = data => {
        data.order = service._id;
        data.status = 'pending';

        const url = `https://safe-oasis-85721.herokuapp.com/placeOrder`;
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
        const url = `https://safe-oasis-85721.herokuapp.com/services/${serviceId}`;
        // const url = `https://quiet-hamlet-58430.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])


    return (
        <div>
            <Navigation></Navigation>
            <Grid container style={{ margin: '50px' }} spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
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
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                    <div>
                        <div className="add-service">
                            <h2>Confirm your booking</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                                <input defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })} placeholder="email" />
                                <input type='text' {...register("address", { required: true })} placeholder="address" />
                                <input type="date" {...register("date", { required: true })} placeholder="date" />
                                <input type="phone" {...register("phone", { required: true })} placeholder="phone number" />
                                <input {...register("city", { required: true, maxLength: 20 })} placeholder="city" />
                                < input type="submit" />
                                {/* {admin ?
                                    <Button variant="contained" disabled>
                                        Disabled
                                    </Button>

                                    :
                                    < input type="submit" />
                                } */}

                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid >
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;