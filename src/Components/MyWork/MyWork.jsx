import React from 'react';
import './MyWork.css'
import theme_pattern from '../../assets/ojs_logo-removebg-preview.png'
import image1 from '../../assets/20081113210219_1.jpg'
import image2 from'../../assets/20081114070353_1.jpg'
import image3 from '../../assets/20081114070506_1.jpg'
import image4 from '../../assets/20090210070314_1.jpg'
import image5 from '../../assets/20090210083751_1.jpg'
import image6 from '../../assets/20090306195842_1.jpg'
const MyWork = () =>{
    return(
        <div id='work' className='mywork'>
<div className="mywork-title">
    <h1>My latest work</h1>
    <img src={theme_pattern} alt="" />
</div>
<div className="mywork-container">
    <div className="pics">
<img src={image1} alt="" />
    </div>
    <div className="pics">
       <img src={image2} alt="" /> 
    </div>
    <div className="pics">
        <img src={image3} alt="" />
    </div>
    <div className="pics">
        <img src={image4} alt="" />
    </div>
    <div className="pics">
        <img src={image5} alt="" />
    </div>
    <div className="pics">
        <img src={image6} alt="" />
    </div>
</div>
<p>Show more</p>
        </div>
    )
}
export default MyWork