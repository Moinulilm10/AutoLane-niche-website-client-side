import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {

        const user = { email }

        // const url = 'http://localhost:5000/users/admin'

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>This is make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;