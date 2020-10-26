import React from 'react';
import '../styles/projects/projects-main.css';
import Header from '../header';
import {NavLink} from 'react-router-dom';
import hero from '../styles/assets/uno-platform.png';
import lines from '../styles/assets/lines.png';
import fileDoc from '../styles/assets/FileDoc/file-doc.png';
import logo from '../styles/assets/FileDoc/logo1.png';




const ProjectsMain = () => {
    return (

        <div className="projects">
            <Header />
            <div className="page-heading">
                    <h1>Projects</h1>
                    <p className="article-section">
                    Please find  below some examples of my work….
                    </p>
                </div>
                <div className="page-content">
                <NavLink to="/projects/uno" className="project-item uno">
                    <div className="project">
                        <div className="watermark">
                            <img className="logo-image" src={lines} alt="hero" />
                        </div>
                        <div className="title">
                            <h2>Uno Integration Platform</h2>
                            <p>A self service supply chain integration platform, delivering a cloud based experience, 
                            into an established technical user base focused.</p>
                        </div>
                        <div className="hero">
                            <img className="profile-image" src={hero} alt="hero" />
                        </div>
                        <div className="project-pills">
                            <div className="pill">
                                <p>Design Strategy</p>
                            </div>
                            <div className="pill">
                                <p>Design System</p>
                            </div>
                            <div className="pill">
                                <p>Component Library</p>
                            </div>
                            <div className="pill">
                                <p>Experience Architecture</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </NavLink>
                <NavLink to="/projects/uno" className="project-item data-vis">
                    <div className="project-alt">
                    <div className="file-doc">
                            <img className="profile-image" src={fileDoc} alt="hero" />
                        </div>
                        <div className="watermark">
                            <img className="logo-image" src={logo} alt="hero" />
                        </div>
                        
                        <div className="title">
                            <h2>Data Visibility</h2>
                            <p>v1.0 of the Uno Platform project, a data visibility application providing user overview 
                                of all transactional data with trading partners.</p>
                        </div>

                        <div className="project-pills-alt">
                            <div className="pill">
                                <p>Design Strategy</p>
                            </div>
                            <div className="pill">
                                <p>Design System</p>
                            </div>
                            <div className="pill">
                                <p>Component Library</p>
                            </div>
                            <div className="pill">
                                <p>Experience Architecture</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </NavLink>
                
                   
                
                </div>
       
          
        </div>
    )
}

export default ProjectsMain;