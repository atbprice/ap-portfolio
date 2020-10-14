import React from 'react';
import './styles/home.css'
import Profile from './styles/assets/profile-img.png';
import {NavLink} from 'react-router-dom';



const home = () => {
    return(
        <div className="home-content">
            <div className="heading-container">
                
                <div className="title-container">
                    <h1>Andy Price</h1>
                    <h3>Product Design Leader</h3>
                    
                    <NavLink to="/projects" className="item">
                        <div className="primary-button">Projects</div>
                    </NavLink>
                    
                </div>
                <div className="image-container">
                    <img className="profile-image" src={Profile} alt="hero" />
                </div>


                <div className="intro-container">
                   
                </div>
                
            </div>
           
           
            <div className="overview-container intro brown white-text">
                <div className="title-box">
                    
                    <h2>About Me</h2>
                </div>
                <p>
                    Hi, I am a product design leader and tech enthusiast based in rural Nottinghamshire.
                    </p>
                    <p>
                    I began my journey as a developer, before migrating to user experience. I wanted to understand, 
                    how the products I was developing were being used, and who was using them. That curiosity led me to the field of UX, and has stayed with me ever since.
                    </p>
                    
                    <p>
                    My passion for UX has allowed me tackle a wide range of design projects and nurture design teams, whilst embedding alignment with Product & Development functions. 
                    </p>
                
            </div>

            <div className="overview-container">
                <div className="process-box">
                    <h2>My Process</h2>
                    <p>I approach all projects following a defined process thats draws close comparison with Design Thinking. I have embedded this process into the teams i have developed & aligned it closely with the agile way of working. </p>
                    
                </div>
            </div>
    
         </div>


        
    );
}

export default home;