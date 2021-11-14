import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



const MyOrders = () => {

    const { user } = useAuth()

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/myOrders/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])

    console.log(myOrders)


    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {

            const url = `http://localhost:5000/deleteOrder/${id}`;
            // const url = `https://quiet-hamlet-58430.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('successfully canceled...')
                        const reamainingServices = myOrders.filter(service => service._id !== id)
                        setMyOrders(reamainingServices);
                    }
                })
        }

    }





    return (
        <div>
            <Typography sx={{ color: '#2c2c2c', mb: 3 }} variant="h6" gutterBottom component="div">
                <i class="fas fa-shopping-cart">  User have booked {myOrders?.length} products</i>
            </Typography>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 350 }} aria-label="my orders table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <Button
                                    onClick={() => handleCancelOrder(row._id)}
                                    sx={{ m: 3 }}
                                    variant="outlined"
                                    color="error">
                                    Cancel
                                </Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;