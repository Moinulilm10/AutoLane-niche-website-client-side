import { Container, Grid } from '@material-ui/core';
import { CircularProgress, Divider, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6))
                setIsLoading(false);
            })
    }, [])

    return (
        <div style={{ marginTop: '70px' }}>
            {/* <Box sx={{ flexGrow: 1 }}> */}
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
                {/* </Box> */}
            </Container>
        </div>
    );
};

export default Services;