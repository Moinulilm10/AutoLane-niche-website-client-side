import React from 'react';
import Typography from '@mui/material/Typography';
import './ExtraSection.css'



const ExtraSection = () => {
    return (
        <div>
            <Typography style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive', fontSize: '30px', color: 'darkred' }} variant="h6" gutterBottom component="div">
                Why chose us
            </Typography>
            <Typography style={{ fontWeight: 'bolder' }} variant="h4" component="div">
                our advantages
            </Typography>
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://image.freepik.com/free-vector/classic-custom-motorcycle-badge_66757-558.jpg" alt="" />
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of ...</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://image.freepik.com/free-vector/biker-with-bearded-retro-helmet-ride-small-engine-classic-vintage-japanese-motorcycle-illustration_66757-519.jpg" alt="" />
                            <h3>Produce</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of ...</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://image.freepik.com/free-vector/hell-road_66757-110.jpg" alt="" />
                            <h3>Rule</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of ...</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;



