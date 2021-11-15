import React, { useEffect, useState } from 'react';
import './ReviewSection.css'
import Typography from "@mui/material/Typography";
import { CircularProgress, Container, Grid } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';

const ReviewSection = () => {


    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/getReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsLoading(false);
            })
    }, [])


    return (
        <div style={{ marginTop: '70px' }}>
            <Container>
                <Typography variant="h4" sx={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', color: 'info.main', mb: 3 }}>Check out out recent review</Typography>
                {isLoading ?
                    (
                        <CircularProgress />
                    )
                    :
                    <Grid container spacing={2}>
                        {
                            reviews.map(review => <ShowReview
                                key={review._id}
                                review={review}
                            ></ShowReview>
                            )
                        }
                    </Grid>
                }
            </Container>
        </div>
    );
};

export default ReviewSection;



// http://localhost:5000/getReviews