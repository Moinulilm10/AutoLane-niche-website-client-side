import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
import { Alert, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {

    const { admin } = useAuth();

    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        data.email = admin?.email;
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    setSuccess(true);
                    reset()
                }
            })

    }

    return (
        <div>
            <div className="add-service mt-4">
                <Typography sx={{ color: '#272727', fontWeight: 'bold' }} variant="h4" gutterBottom component="div">
                    Add New Product
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <br />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
                <br />
                {success && <Alert severity="success">add product successfully</Alert>}
            </div>
        </div>
    );
};

export default AddProduct;