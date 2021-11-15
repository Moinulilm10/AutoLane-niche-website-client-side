import { Container, Grid } from '@material-ui/core';
import { CircularProgress, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://safe-oasis-85721.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6))
                setIsLoading(false);
            })
    }, [])

    return (
        <div style={{ marginTop: '70px' }}>
            <Container>
                <Typography sx={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', fontWeight: 500, mt: 5, color: '#d0d340' }} variant="h3" component="div">
                    Our Products
                </Typography>
                <Divider />
                {isLoading ?
                    (
                        <CircularProgress />
                    )
                    :
                    (

                        <Grid container spacing={2}>
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </Grid>

                    )
                }
            </Container>
        </div>
    );
};

export default Services;