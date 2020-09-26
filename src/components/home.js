import React from 'react';
import './styles/home.css'
import Profile from './styles/assets/profile-img.png';
import pmCert from './styles/assets/pm-cert.png';
import smCert from './styles/assets/sm-cert.png';

import AzureRP from './styles/assets/azure-rp.png';
import XD from './styles/assets/xd-icon.png';
import Figma from './styles/assets/figma.png';
import Sketch from './styles/assets/sketch.png';


const home = () => {
    return(
        <div className="home-content">
            <div className="heading-container">
                <div className="image-container">
                    <img className="profile-image" src={Profile} alt="hero" />
                </div>
                <div className="title-container">
                    <h1>Andy Price</h1>
                </div>
                <div className="intro-container">
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
                
            </div>
            <div className="icon-container">
                    <div className="left-logos">
                        <img className="icon pmCert" src={pmCert} alt="hero" />
                        <img className="icon smCert" src={smCert} alt="hero" />
                    </div>
                    <div className="right-logos">
                        <img className="icon Sketch" src={Sketch} alt="hero" /> 
                        <img className="icon Figma" src={Figma} alt="hero" />
                        <img className="icon XD" src={XD} alt="hero" />
                        <img className="icon AzureRP" src={AzureRP} alt="hero" /> 
                    </div>
                   
                </div>
            
            
           
            <div className="overview-container">
                <div className="title-box">
                    <span className="title-line"></span>
                    <h2>Overview</h2>
                </div>
                <p>
                I have developed my skillset over my career to allow me to use experiences from my past to help me tackle design challenges. 
                A design challenge can vary from a product or project, to gaining buy in for the values of UX or a specific approach. 
                I follow a standard approach towards all projects that is an evolution of Design Thinking streamlined to allow me to work at 
                speed where required. My teams have successfully adopted this process with my focus being on visibility of progress & clear achievable milestones.
                </p>
                
            </div>
    
         </div>


        
    );
}

export default home;