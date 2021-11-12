import React from 'react';
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ExtraSection = () => {
    return (
        <div>
            <h2>Our Upcoming Products</h2>
            <Slider {...settings}>
                <div>
                    <img src={"https://image.freepik.com/free-photo/motorcycle-with-helmet_23-2148875785.jpg"} alt="" />
                </div>
                <div>
                    <img src={"https://image.freepik.com/free-photo/man-riding-motorcycle_23-2148875779.jpg"} alt="" />
                </div>
                <div>
                    <img src={"https://image.freepik.com/free-photo/motorcycle-studio_37416-146.jpg"} alt="" />
                </div>
                <div>
                    <img src={"https://image.freepik.com/free-photo/item-boxes-are-motorcycles-3d-rendering-illustration_37416-313.jpg"} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default ExtraSection;



