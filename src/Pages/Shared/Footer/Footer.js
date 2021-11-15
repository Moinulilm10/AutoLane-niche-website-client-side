import React from 'react';
import './Footer.css'

import logo from '../../../Images/Logo/logo-retina.png'

import img from '../../../Images/Banner/banner-bg.jpg'

import { Container, Grid, List, ListItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    root: {
        background: `url(${img}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'black'
    },
    linkItem: {
        color: '#404041',
        textDecoration: 'none',
        marginRight: 15,
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))


const Footer = () => {
    const { root, linkItem } = useStyle()
    return (
        <div className={root}>
            <Container>
                <Grid container style={{ padding: '50px 0' }}>
                    <Grid item md={6}>
                        <img style={{ maxWidth: '100%' }} src={logo} alt="" />
                    </Grid>
                    <Grid item md={6}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <List>
                                <ListItem><Link className={linkItem} to="#">About Our Website</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Explore our features</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Sign up to deliver</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Add your tough's</Link> </ListItem>
                            </List>
                            <List>
                                <ListItem><Link className={linkItem} to="#">Get help</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Read FAQs</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">View Products</Link> </ListItem>
                                <ListItem><Link className={linkItem} to="#">Showroom near me</Link> </ListItem>

                            </List>
                        </div>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid gray' }}>
                    <div>
                        <Link className={linkItem} to="#">Private Policy</Link>
                        <Link className={linkItem} to="#">Terms of Use</Link>
                        <Link className={linkItem} to="#">Pricing</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;