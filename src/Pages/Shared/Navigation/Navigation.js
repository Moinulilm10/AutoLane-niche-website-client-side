import React from 'react';
import './Navigation.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import navImg from '../../../Images/Logo/logo-retina.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#33333E' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "200px",
                        // marginRight: '700px'
                    }}
                        src={navImg} alt="" />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/services">
                            <Button color="inherit">Products</Button>
                        </NavLink>


                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                            <Button color="inherit">AboutUs</Button>
                        </NavLink>

                        <Button color="inherit">DashBoard</Button>

                        {
                            user?.email ?
                                <Button onClick={logout} color="inherit">Logout</Button>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Typography>




                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;