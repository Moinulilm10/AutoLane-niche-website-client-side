import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import img from '../../../Images/Banner/banner-bg.jpg'
import { Button, Grid } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    banner: {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 57px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }
}))

const Banner = () => {
    const { banner } = useStyle();
    return (
        <div className={banner}>
            <Typography variant="h2" style={{ padding: '0 30px' }} >
                The Best Bike You Will Get.
                <br />
                <NavLink style={{ textDecoration: '', color: 'white' }} to="/services">
                    <Button color="inherit">Explore Our Products</Button>
                </NavLink>
            </Typography>


        </div>
    );
};

export default Banner;