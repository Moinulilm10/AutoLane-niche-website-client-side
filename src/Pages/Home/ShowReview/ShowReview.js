import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const ShowReview = (props) => {

    const { name, description, ratting, date } = props.review;
    const [rating, setRatting] = useState(0);


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Rating
                        name="simple-controlled"
                        value={ratting}
                        onChange={(event, newValue) => {
                            setRatting(newValue);
                        }}
                    />
                    <Typography variant="h6" gutterBottom>
                        <small> {description}</small>
                    </Typography>
                    <Typography variant="h7" gutterBottom component="div">
                        <small>{date}</small>
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default ShowReview;