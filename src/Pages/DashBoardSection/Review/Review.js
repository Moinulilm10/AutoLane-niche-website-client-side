import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'

const Review = () => {

    const { register, handleSubmit, reset } = useForm();



    return (
        <div className="add-service mt-4">
            <Typography sx={{ color: '#272727', fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                Give a review
            </Typography>
            <form onSubmit={handleSubmit()}>
                <input {...register("img")} placeholder="want to upload a pic ?" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="number" {...register("ratting", { min: 0, max: 5 })} placeholder="ratting" />
                <textarea {...register("description")} placeholder="Write something about our web app" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;