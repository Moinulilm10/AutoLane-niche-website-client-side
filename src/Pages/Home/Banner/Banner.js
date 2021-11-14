import React from 'react';
import img from '../../../Images/Banner/banner-bg.jpg'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { Typography } from '@material-ui/core';
import './Banner.css'






const Banner = () => {

    const theme = useTheme();



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
            color: '#fff',
        },

    }))

    const { banner } = useStyle();

    return (
        <div className="banner-container">
            <div className={banner}>
                <Typography variant="h2" style={{ padding: '0 30px' }} >
                    The Best Bike You Will Get.
                    <br />
                    <NavLink style={{ textDecoration: '', color: 'white' }} to="/explores">
                        <Button color="inherit">Explore Our Products</Button>
                    </NavLink>
                </Typography>
            </div>
        </div>
    );
};

export default Banner;