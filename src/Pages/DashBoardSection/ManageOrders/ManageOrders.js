import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageOrders = () => {

    const [userOrders, setUserOrders] = useState([])



    useEffect(() => {
        const url = `https://safe-oasis-85721.herokuapp.com/orders`;
        // const url = `https://quiet-hamlet-58430.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);
            })
    }, [])


    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {

            const url = `https://safe-oasis-85721.herokuapp.com/deleteOrder/${id}`;
            // const url = `https://quiet-hamlet-58430.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('successfully canceled...')
                        const reamainingServices = userOrders.filter(service => service._id !== id)
                        setUserOrders(reamainingServices);
                    }
                })
        }

    }


    const handleApproveOrder = (id) => {
        // console.log(id);
        const updatedorder = userOrders.find(order => order._id === id);
        updatedorder.status = 'approved';


        const url = `https://safe-oasis-85721.herokuapp.com/approve/${id}`;
        // const url = `https://quiet-hamlet-58430.herokuapp.com/approve/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedorder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully');

                    const remaining = userOrders.filter(order => order._id !== id);
                    remaining.push(updatedorder);
                    setUserOrders(remaining);
                }
            })
    }




    return (
        <div>
            <Typography sx={{ color: '#2c2c2c', mb: 3 }} variant="h6" gutterBottom component="div">
                <i class="fas fa-shopping-cart">  You have booked {userOrders?.length} products</i>
            </Typography>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 350 }} aria-label="my orders table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>

                                {row?.status === "pending"
                                    ?
                                    (
                                        < TableCell style={{ color: 'red', fontWeight: 'bold' }} align="center">{row.status}</TableCell>
                                    )
                                    :
                                    (
                                        < TableCell style={{ color: 'green', fontWeight: 'bold' }} align="center">{row.status}</TableCell>
                                    )

                                }
                                <Button
                                    onClick={() => handleCancelOrder(row._id)}
                                    sx={{ m: 2 }}
                                    variant="outlined"
                                    color="error">
                                    Cancel
                                </Button>


                                {row?.status === "pending"
                                    ?

                                    (
                                        <Button
                                            onClick={() => handleApproveOrder(row._id)}
                                            sx={{ m: 2 }}
                                            variant="outlined"
                                            color="success">
                                            Confirm
                                        </Button>
                                    )
                                    :
                                    (
                                        <span style={{ color: 'green', fontWeight: 'bolder' }}>
                                            order ready for shipping
                                        </span>
                                    )
                                }


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default ManageOrders;