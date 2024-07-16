import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/ojs_logo-removebg-preview.png';


const Services = () => {
    return (
        <div id='services' className='services'>
<div className="services-title">
    <h1>My Services</h1>
    <img src={theme_pattern} alt="" />
</div>
<div className="services-container">
    <div className="web">
        <h3>01</h3>
        <h2>Web design</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a>
    </div>
    <div className="web">
    <h3>02</h3>
        <h2>Graphics design</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a> 
    </div>
    <div className="web">
    <h3>03</h3>
        <h2>Social media</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a>
    </div>
    <div className="web">
    <h3>04</h3>
        <h2>App design</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a>
    </div>
    <div className="web">
    <h3>05</h3>
        <h2>Digital marketing</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a>
    </div>
    <div className="web">
    <h3>06</h3>
        <h2>Content writing</h2>
        <p>Web development is the process of building programming..</p>
        <a href="#">Read more</a>
    </div>
</div>
        </div>
    )
}
export default Services