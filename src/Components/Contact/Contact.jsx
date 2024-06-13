import React from 'react';
import './Contact.css'
import theme_pattern from '../../assets/ojs_logo-removebg-preview.png'
import mail_icon from '../../assets/mail-removebg-preview.png'
import location from '../../assets/location-removebg-preview.png'
import call_icon from '../../assets/download-removebg-preview.png'


const Contact = () => {
    return (
        <div id='contact' className='contact'>
<div className="contact-title">
    <h1>Get in touch</h1>
    <img src={theme_pattern} alt="" />
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>offorjohn55@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={location} alt="" /> <p>Nigeria, Enugu State</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+2348149469317</p>
                </div>
        </div>
    </div>
    <form className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name ' name='name'/>
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit now</button>
    </form>
</div>
        </div>
    )
}
export default Contact