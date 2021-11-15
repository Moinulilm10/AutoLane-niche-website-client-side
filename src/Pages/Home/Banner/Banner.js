import { Container, Typography } from '@material-ui/core';
import React from 'react';
import banner1 from '../../../Images/Banner/banner-bg.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpg'
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';

const carouselData = [
    {
        img: banner1,
        titleText: 'The best you get',
        slugText: 'Best car repair workshop',
        textPosition: 'left'
    },
    {
        img: banner2,
        titleText: 'We always be real',
        slugText: 'Best Car Repair Service',
        textPosition: 'center'
    },
    {
        img: banner3,
        titleText: 'Make Your Bike',
        slugText: 'Last longer and attractive',
        textPosition: 'left'
    },
]
const Banner = () => {
    return (
        <Carousel
            animation="slide"
            indicators={false}
        >
            {
                carouselData.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    );
};
const CarouselItem = ({ item }) => {
    const { img, titleText, textPosition } = item
    const bannerStyle = {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    }

    return (
        <section style={bannerStyle}>
            <Container style={{ textAlign: textPosition }}>
                <Typography style={{ fontSize: 'calc(2vmax + 40px)' }} variant="h6">{titleText}</Typography>
                <Typography style={{ fontSize: 'calc(1vmax + 10px)' }} variant="body1">
                    We provides always our best services for our clients and always <br />
                    try to achieve our client's trust and satisfaction.
                </Typography>
                <br />
                <Typography style={{ fontSize: '50px' }} variant="body1">
                    Explore our all Products
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to="/explores">
                        <Button style={{ fontSize: '20px', backgroundColor: '#F5F500', color: 'black' }} variant="contained" endIcon={<SendIcon />}>
                            Explore our Products
                        </Button>
                    </NavLink>

                </Typography>
            </Container>
        </section>
    )
}
export default Banner;

