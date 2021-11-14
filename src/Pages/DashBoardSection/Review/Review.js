import { Alert, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Review.css'

const Review = () => {

    const { register, handleSubmit, reset } = useForm();

    const [success, setSuccess] = useState(false);

    const { user } = useAuth()

    const onSubmit = data => {
        console.log(data);
        data.email = user?.email;
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(data)
                    alert('added successfully');
                    setSuccess(true);
                    reset()
                }
            })

    }



    return (
        <div className="add-service mt-4">
            <Typography sx={{ color: '#272727', fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                Give a review
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="want to upload a pic ?" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="number" {...register("ratting", { min: 0, max: 5 })} placeholder="ratting" />
                <textarea {...register("description")} placeholder="Write something about our web app" />
                <br />
                <input type="submit" />
            </form>
            <br />
            {success && <Alert severity="success">add product successfully</Alert>}
        </div>
    );
};

export default Review;



// const url = http://localhost:5000/reviews