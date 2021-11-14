import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { textAlign } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.jpg'
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{ marginTop: '50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ marginTop: '50px' }}>
                        <Typography sx={{ fontWeight: 500, color: '#2c2c2c', m: 3 }} variant="h6" component="div">
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1, color: 'blue' }}
                                id="standard-basic"
                                label="Enter Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1, color: 'blue' }}
                                id="standard-basic"
                                label="Your PassWord"
                                name="password"

                                type="password"

                                onChange={handleOnChange}
                                variant="standard" />
                            <Button sx={{ width: '75%', mt: 4 }} type="submit" variant="contained">Login</Button>
                            <NavLink style={{ textDecoration: 'none', marginTop: '30px', }} to="/register"><Button variant="text" style={{ marginTop: '30px', textAlign: 'center' }}>New User? Please Register</Button></NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Login Successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <br />
                        <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;