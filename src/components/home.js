import React from 'react';
import './styles/home.css'
import Profile from './styles/assets/profile-img.png';
import Project from './styles/assets/project.png';
import Process from './styles/assets/process-diagram.png';
import ColourBar from './styles/assets/colorbar.png';


import {NavLink} from 'react-router-dom';



const home = () => {
    return(
        <div className="home-content">
            <div className="heading-container">
                
                <div className="title-container">
                    <h1 className="banner-title">Andrew Price</h1>
                    <h3 className="banner-sub">Product Design Leader</h3>
                    
                    <NavLink to="/projects" className="item">
                        <div className="primary-button">Projects</div>
                    </NavLink>
                    
                </div>
                <div className="image-container">
                    <img className="profile-image" src={Profile} alt="hero" />
                </div>
            </div>
           
            <div className="overview-container intro dark">
                <div className="title-box">
                    
                    <h2 className="banner-sub">About Me</h2>
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
                    <span classname="color-bar">
                        <img className="color-bar" src={ColourBar} alt="hero" />
                    </span>
                
            </div>

            <div className="overview-container">
                <h2>Latest Project</h2>

                <div className="project-card dark">
                    <h3 className="banner-sub">Project Uno</h3>
                    <p>
                    £8 million business migration project, delivering a web focused experience for automotive supplier integration. 
                    </p>
                    <span className="project-type yellow">B2B Enterprise Platform</span>
                    <span className="project-image">
                        <img src={Project} alt="Project Image" />
                    </span>
                </div>
            </div>
            <div className="overview-container">
                <h2>My Process</h2>
                <span className="process-image">
                        <img src={Process} alt="Project Image" />
                </span>
                <div className="process-text">
                    <p>process supporting text</p>
                </div>

            </div>
            
    
         </div>


        
    );
}

export default home;