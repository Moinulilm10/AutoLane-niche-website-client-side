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
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explores">
                        <Button color="inherit">Products</Button>
                    </NavLink>


                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                        <Button color="inherit">AboutUs</Button>
                    </NavLink>

                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }


                    <Typography variant="button" display="block" gutterBottom>
                        <a href="#login"> {user?.displayName}</a>
                    </Typography>




                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;