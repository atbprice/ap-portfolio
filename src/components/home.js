import React from 'react';
import './styles/home.css'
import Header from './header';
import hero from './styles/assets/uno-platform@2x.png';
import filedoc from './styles/assets/FileDoc/file-doc@2x.png'
import {NavLink} from 'react-router-dom';



const home = () => {
    return(
        <div className="master">
            <div className="home-content">

           
             <Header />
            <div className="heading-container">
                
                <div className="title-container">
                    <span className="welcome">Welcome</span>
                    <h1 className="banner-title">Andrew Price</h1>
                    <h3 className="banner-sub">Product Design Leader</h3>
                    
                </div>
            </div>
           
           

            <div className="overview-container latest">

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
                        <NavLink to="/projects/uno" className="">View Project &gt;</NavLink>
                        </div>
                    </div>
                    <div className="proj-right">
                        <div className="colors">
                            <span className="colorbox b1 l"></span>
                            <span className="colorbox b1 r"></span>
                            <span className="colorbox b1 b"></span>
                        </div>
                       
                        <img className="project-image" src={hero} alt="hero" />
                    </div>
                </div>
                <div className="proj">
                    <div className="proj-left">
                    <div className="colors">
                            <span className="colorbox b2 l"></span>
                            <span className="colorbox b2 r"></span>
                            <span className="colorbox b2 b"></span>
                        </div>
                       
                        <img className="project-image" src={filedoc} alt="hero" />
                    </div>
                    <div className="proj-right">
                        <div className="proj-title">
                            <h3>Data Visibility</h3>
                        </div>
                        <div className="proj-text">
                        <p>v1.0 of the Uno Platform project, a data visibility application providing user overview of all transactional data with trading partners.
                        </p>
                           
                        </div>
                        <div className="proj-link">
                        <NavLink to="/projects/fileanddocument" className="">View Project >></NavLink>
                        </div>


                       
                    </div>
                </div>
            </div>
            
            </div>
    
         </div>


        
    );
}

export default home;