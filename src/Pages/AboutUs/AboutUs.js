import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="full-body">
                <div className="body">
                    <div className="about-section">
                        <div className="inner-container">
                            <h1>About Us</h1>
                            <p className="text">
                                A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding.Since motorcycles can be lighter than cars, they can accelerate more quickly.
                            </p>
                            <div className="skills">
                                <span>Ride</span>
                                <span>Share</span>
                                <span>Explore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default AboutUs;