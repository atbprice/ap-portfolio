import React from 'react';
import Header from '../header';
import DashboardMain from '../styles/assets/uno-platform@2x.png';
import btnLight from '../styles/assets/btn-light.png';
import btnDark from '../styles/assets/btn-dark.png';
import arch1 from '../styles/assets/arch1.png';
import arch2 from '../styles/assets/arch2.png';
import arch3 from '../styles/assets/arch3.png';

import templateOne from '../styles/assets/Uno/menu.png';
import templateTwo from '../styles/assets/Uno/platform.png';
import templateOneDark from '../styles/assets/Uno/dark/menu.png';
import templateTwoDark from '../styles/assets/Uno/dark/platform.png';

const ProjectsUno = () => {
    return (
        <div className="master-project">
            <div className="home-content">

                <Header />

                <div className="project-title">
                    <h1>Integration Platform</h1>
                    <p> A self service supply chain integration platform, delivering a cloud based experience, 
                        into an established technical user base focused.</p>
                </div>  
                <div className="my-role">
                    <span>My Role: Lead Designer  |  User Experience  |  User Interface</span>
                </div>
                <div className="main-image">
                    <img src={DashboardMain} alt="Forest" />
                </div>  

                <div className="intro">
                    <h2>My Role</h2>
                    <p>I am the Lead Designer for the delivery of the new platform, I was tasked with building 
                        a team of designers capable of researching, designing & testing every area of the platform. 
                        The platform has been broken into 8 projects each of which will have a dedicated designer 
                        allocated.
                    </p>
                </div> 
                <div className="intro">
                    <h2>How it will work</h2>
                    <p>The platform will replace all existing products the company currently sells. The project 
                        goal is to migrate from desktop on premise software to a cloud based web platform.
                         That migration requires a new design of the existing solution.
                    </p>
                </div>
                <div className="intro">
                    <h2>Design System / Component library</h2>
                    <p>Providing a consistent experience across a platform is a challenge, also when have multiple 
                        designers all with their own flair a design system was required. This started off as 
                        simple as a button looks like this but has since grown to be all elements needed for 
                        the platform.
                    </p>
                    <div className="two-image">
                        <img src={btnLight} alt="Forest" />
                    </div> 
                    <div className="two-image">
                        <img src={btnDark} alt="Forest" />
                    </div> 
                    <p>Each component designed has been developed to match, ensuring consistency into delivery of 
                        all provided experiences. 
                    </p>    
                </div>

                <div className="intro">
                    <h2>Platform Architecture</h2>
                    <p>The platform follows a defined approach of a centralised portal that all users will arrive into upon login. 
                        Once they are here they can then move into the sub modules of the platform, with each module having 
                        its own navigation structure.
                    </p>
                    <div className="main-image">
                        <a href={arch1} target="_blank" rel="noreferrer noopener" className="">
                            <img src={arch1} alt="Design Sprint" />
                        </a>
                    </div> 
                    <div className="two-image">
                        <a href={arch2} target="_blank" rel="noreferrer noopener" className="">
                            <img src={arch2} alt="Design Sprint" />
                        </a>
                       
                    </div> 
                    <div className="two-image">
                        <a href={arch3} target="_blank" rel="noreferrer noopener" className="">
                            <img src={arch3} alt="Design Sprint" />
                        </a>    
                    </div> 
                   
                </div>
                <div className="intro">
                    <h2>Platform Template</h2>
                    <p>
                    </p>
                    <div className="template-container">
                        <div className="nav">
                            <a href={templateOne} target="_blank" rel="noreferrer noopener" className="">
                                <img src={templateOne} alt="Design Sprint" />
                            </a> 
                        </div> 
                        <div className="template">
                            <a href={templateTwo} target="_blank" rel="noreferrer noopener" className="">
                                <img src={templateTwo} alt="Design Sprint" />
                            </a>                         
                        </div>
                    </div>
                    <div className="template-container">
                        <div className="nav">
                            <a href={templateOneDark} target="_blank" rel="noreferrer noopener" className="">
                                <img src={templateOneDark} alt="Design Sprint" />
                            </a>  
                        </div> 
                        <div className="template">
                            <a href={templateTwoDark} target="_blank" rel="noreferrer noopener" className="">
                                <img src={templateTwoDark} alt="Design Sprint" />
                            </a>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProjectsUno;