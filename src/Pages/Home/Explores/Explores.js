import { Container, Grid } from '@material-ui/core';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Explore from '../Explore/Explore';

const Explores = () => {


    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://safe-oasis-85721.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', fontWeight: 500, mt: 5, color: '#8B8000' }} variant="h3" component="div">
                    Our Products
                </Typography>

                {isLoading ?
                    (
                        <CircularProgress />
                    )
                    :
                    (
                        <Container>
                            <Grid container spacing={{ xs: 12, md: 4 }} columns={{ xs: 12, sm: 6, md: 4 }}>
                                {
                                    services.map(service => <Explore
                                        key={service._id}
                                        service={service}
                                    ></Explore>)
                                }
                            </Grid>
                        </Container>
                    )
                }
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default Explores;
