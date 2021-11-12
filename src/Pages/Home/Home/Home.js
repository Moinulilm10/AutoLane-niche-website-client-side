import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;