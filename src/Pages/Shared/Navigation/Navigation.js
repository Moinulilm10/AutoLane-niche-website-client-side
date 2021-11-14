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
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function Navigation() {

    const theme = useTheme();

    const { user, logout } = useAuth();

    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important',
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'left',
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }

    })

    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle()


    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >

            <List>
                <ListItem button>
                    <ListItemText>
                        <NavLink to="/">
                            <img style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                width: "180px",
                                backgroundColor: 'black'
                            }}
                                src={navImg} alt="" />
                        </NavLink>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/explores">Products</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/about">About</Link>
                    </ListItemText>
                </ListItem>
                <Divider />

                {
                    user?.email ?
                        <div>
                            <ListItem button>
                                <ListItemText>
                                    <Link className={mobileNavItem} to="/dashboard">Dashboard</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem button>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </ListItem>
                        </div>

                        :
                        <ListItem button>
                            <ListItemText>
                                <Link className={mobileNavItem} to="/login">Login</Link>
                            </ListItemText>
                        </ListItem>

                }
                <Divider />





            </List>

        </Box>
    );



    return (

        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: '#343434' }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>



                        <Typography style={{ marginRight: '600px' }} className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to="/">
                                <img style={{
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    width: "200px",
                                }}
                                    src={navImg} alt="" />
                            </NavLink>
                        </Typography>


                        <div style={{ display: 'flex' }} className={navItemContainer}>
                            <Link className={navItem} to="/explores">
                                <Button color="inherit">Products</Button>
                            </Link>


                            <Link className={navItem} to="/about">
                                <Button color="inherit">AboutUs</Button>
                            </Link>

                            {
                                user?.email ?
                                    <div>
                                        <Link className={navItem} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </Link>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </div>
                                    :
                                    <Link className={navItem} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }


                            <Typography style={{ margin: '6px', }} variant="button" >
                                <a style={{ color: 'yellow' }} href="#login"> {user?.displayName}</a>
                            </Typography>
                        </div>

                    </Toolbar>
                </AppBar>
            </Box>

            <div>

                <React.Fragment>
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>

        </>
    );
}











// const Navigation = () => {
//     const { user, logout } = useAuth();
//     return (
//         <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#33333E' }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>

//                     <Link to="/"><img style={{
//                         marginTop: "10px",
//                         marginBottom: "10px",
//                         width: "200px",
//                         // marginRight: '700px'
//                     }}
//                         src={navImg} alt="" />
//                     </Link>


//                     <Box>
//                         <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explores">
//                             <Button color="inherit">Products</Button>
//                         </NavLink>


//                         <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
//                             <Button color="inherit">AboutUs</Button>
//                         </NavLink>

//                         {
//                             user?.email ?
//                                 <Box>
//                                     <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
//                                         <Button color="inherit">Dashboard</Button>
//                                     </NavLink>
//                                     <Button onClick={logout} color="inherit">Logout</Button>
//                                 </Box>
//                                 :
//                                 <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
//                                     <Button color="inherit">Login</Button>
//                                 </NavLink>
//                         }


//                         <Typography variant="button" >
//                             <a href="#login"> {user?.displayName}</a>
//                         </Typography>
//                     </Box>






//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };

// export default Navigation;