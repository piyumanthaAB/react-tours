// import { useState } from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { RiMailSendFill } from "react-icons/ri";

const Contact = (props) => {

    props.setBackImage('contact');
    props.setNavActive('contact');

   
    return (
        <div className="contact contact--animated" >
            <div className="contact__content">
                <div className="contact__heading">Contact Us</div>
                <div className="contact__form-container">
                    
                    <form action="#" className="form form--contact">
                        <h1 className="form__title form__title--contact"> FEEDBACK FORM</h1>
                        <div className="form__group">
                            <input type="text" className="form__input form__input--contact" required placeholder='Name' id='name' />
                            <label htmlFor='name' className="form__label form__label--contact">Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input form__input--contact" required placeholder='Email' id='email' />
                            <label htmlFor='email' className="form__label form__label--contact">Email</label>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input form__input--contact" required placeholder='Phone' id='phone' />
                            <label htmlFor='phone' className="form__label form__label--contact">Phone</label>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input form__input--contact" required placeholder='Message' id='message' />
                            <label htmlFor='message' className="form__label form__label--contact">Message</label>
                        </div>
                        <button className="btn btn--submit">Send Message <RiMailSendFill className='btn--submit-icon' /></button>
                    </form>

                </div>
            </div>
            <div className="contact__footer">
                
                <div className="contact__address">
                    <h1 className="contact__address-title">OUR ADDRESS</h1>
                    <p className="contact__address-detail">
                    185 Soi 45 Puthaosoth Nares  
                    </p>
                    <p className="contact__address-detail">
                    Pranakhon
                    </p>
                    <p className="contact__address-detail">
                        Bangkok
                    </p>
                </div>

                <div className="contact__details">
                    <h1 className="contact__details-title">OUR CONTACTS</h1>
                    <p className="contact__details-detail">
                        hello@name.com
                    </p>
                    <p className="contact__details-detail">
                        662 2330310
                    </p>
                </div>
                <div className="contact__icons">
                    <div className="contact__icon-container">
                        <FaFacebookF className="contact__icon" />
                    </div>
                    <div className="contact__icon-container">
                        <GrInstagram className="contact__icon" />
                    </div>
                    <div className="contact__icon-container">
                        <FaTwitter className="contact__icon" />
                    </div>
                    <div className="contact__icon-container">
                        <FaYoutube className="contact__icon" />
                    </div>
                    <p className='contact__icons-text'><BsDash /> follow us</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;