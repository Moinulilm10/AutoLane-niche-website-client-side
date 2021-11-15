import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="contact-body">
                <div className="contact-section">
                    <div style={{ marginTop: "80px" }} className="wrapper">
                        <div class="title">
                            <h1>contact us form</h1>
                        </div>
                        <div class="contact-form">
                            <div className="input-fields">
                                <input type="text" class="input" placeholder="Name" />
                                <input type="text" class="input" placeholder="Email Address" />
                                <input type="text" class="input" placeholder="Phone" />
                                <input type="text" class="input" placeholder="Want to join us ?" />
                            </div>
                            <div className="msg">
                                <textarea placeholder="Message"></textarea>
                                <div class="btn">send</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;