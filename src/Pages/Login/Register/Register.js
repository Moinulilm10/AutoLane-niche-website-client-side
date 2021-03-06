// import { Typography } from '@material-ui/core';
// import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
// import { Alert } from '@mui/material';
// import React, { useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
// import regPic from '../../../Images/register.jpg'
// import Footer from '../../Shared/Footer/Footer';
// import Navigation from '../../Shared/Navigation/Navigation';

// const Register = () => {

//     const [loginData, setLoginData] = useState({});
//     const history = useHistory();
//     const { user, registerUser, isLoading, authError } = useAuth();

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }

//     const handleLoginSubmit = e => {
//         if (loginData.password !== loginData.password2) {
//             alert('Your password did not match');
//             return
//         }
//         registerUser(loginData.email, loginData.password, loginData.name, history);
//         e.preventDefault();
//     }

//     return (
//         <div>
//             <Navigation></Navigation>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 10 }} xs={12} md={6}>
//                     <Typography sx={{ fontWeight: 500, color: 'secondary.main', m: 3 }} variant="body1" gutterBottom>Register</Typography>
//                     {!isLoading && <form onSubmit={handleLoginSubmit}>
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Name"
//                             name="name"
//                             onBlur={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Email"
//                             name="email"
//                             type="email"
//                             onChange={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Password"
//                             type="password"
//                             name="password"
//                             onChange={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="ReType Your Password"
//                             type="password"
//                             name="password2"
//                             onChange={handleOnBlur}
//                             variant="standard" />

//                         <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
//                         <NavLink
//                             style={{ textDecoration: 'none' }}
//                             to="/login">
//                             <Button variant="text">Already Registered? Please Login</Button>
//                         </NavLink>
//                     </form>}
//                     {isLoading && <CircularProgress />}
//                     {user?.email && <Alert severity="success">User Created successfully!</Alert>}
//                     {authError && <Alert severity="error">{authError}</Alert>}
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src={regPic} alt="" />
//                 </Grid>
//             </Grid>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Register;

import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../Images/register.jpg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
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

export default Register;