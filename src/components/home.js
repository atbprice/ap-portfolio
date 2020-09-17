import React from 'react';
import './styles/home.css'
import Profile from '../styles/assets/profile-img.png';


const home = () => {
    return(
        <div className="">
            <div className="image-container">
            <img className="profile-image" src={Profile} alt="hero" />
            </div>
            <div className="title=container">
                <h1>Andy Price</h1>
            </div>

            
            
                
         </div>


        
    );
}

export default home;