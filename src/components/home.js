import React from 'react';
import './styles/home.css'

import ColourBar from './styles/assets/colorbar.png';
import Header from './header';
import hero from './styles/assets/uno-platform.png';



import {NavLink} from 'react-router-dom';



const home = () => {
    return(
        <div className="home-content">
             <Header />
            <div className="heading-container">
                
                <div className="title-container">
                    <h1 className="banner-title">Andrew Price</h1>
                    <h3 className="banner-sub">Product Design Leader</h3>
                    
                </div>
            </div>
           
            <div className="overview-container intro dark">
                <div className="text-padding">
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

                </div>
               
                    <span classname="color-bar">
                        <img className="color-bar" src={ColourBar} alt="hero" />
                    </span>
                
            </div>

            <div className="overview-container latest">
                <h2>Latest Project</h2>

                <div className="proj">
                    <div className="proj-left">
                        <div className="proj-title">
                            <h3>Integration Platform</h3>
                        </div>
                        <div className="proj-text">
                            <p>A self service supply chain integration platform, delivering a cloud based experience, 
                            into an established technical user base focused.</p>
                        </div>
                        <div className="proj-link">
                        <NavLink to="/projects/uno" className="">View Project </NavLink>
                        </div>
                    </div>
                    <div className="proj-right">
                        <img className="profile-image" src={hero} alt="hero" />
                    </div>
                </div>
            </div>
            
            
    
         </div>


        
    );
}

export default home;