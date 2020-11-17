import React from 'react';
import Header from '../header';
import DashboardMain from '../styles/assets/FileDoc/Dashboard.png';
import DesignSprint from '../styles/assets/FileDoc/designsprint.png';
import Powerpoint from '../styles/assets/FileDoc/pptfile.png';
import ReqsDocument from '../styles/assets/reqs-doc@2x.png';
import userFlows from '../styles/assets/FileDoc/userflows.png';
import userFlows2 from '../styles/assets/FileDoc/userflows2.png';

import lowFidLanding from '../styles/assets/FileDoc/Landing.png';
import lowFidFileDetail from '../styles/assets/FileDoc/file-detail.png';
import lowFidFileList from '../styles/assets/FileDoc/file-listing.png';
import lowfidTheme from '../styles/assets/FileDoc/Theme@2x.png';

import finDashboard from '../styles/assets/FileDoc/Dashboard.png';
import finFileList from '../styles/assets/FileDoc/file-list.png';
import finFileList2 from '../styles/assets/FileDoc/file-listing2.png';
import finTheme from '../styles/assets/FileDoc/Theme-Default.png';

import mobDashboard from '../styles/assets/FileDoc/mob-dash.png';
import mobLising from '../styles/assets/FileDoc/mob-list.png';
import mobDocument from '../styles/assets/FileDoc/mob-doc.png';




const ProjectsFileandDocument = () => {
    return (
        <div className="master-project">
            <div className="home-content">

             <Header />
            
            <div className="project-title">
                <h1>File and Document Visibility</h1>
                <p> A data visibility application providing user overview of all 
                transactional data with trading partners.</p>
            </div>  
            <div className="my-role">
                <span>My Role: Lead Designer  |  User Experience  |  User Interface</span>
            </div>
            <div className="main-image">
                <img src={DashboardMain} alt="Forest" />
            </div>       

            <div className="intro">
                <h2>The Project</h2>
                <p>An existing product in place for around 6 years, extended over time. 
                    Customer feedback highlighted confusion with the existing solution with 
                    the majority giving up and raising Helpdesk tickets instead of using the product.
                </p>

                <p>
                    The project was to research, define and design an updated version of the product that 
                    aligned closely with the users primary problems as part of the organisations digital 
                    migration strategy.
                </p>
            </div> 

            <div className="intro">
                <h2>The Problem</h2>
                <p>
                First step is always to understand the user problems, once you have a clear understanding
                 of the problem or problems you are trying to solve everything else becomes an extensive of that.
                 </p>

                <p>The challenge with the project was all the stakeholders thought they knew the answers 
                    to all the questions, but were swayed by years of product development & expansion.
                </p>
                <div className="left-content">
                    <p>I used a structured design workshop coined by google as a design sprint to bring all the 
                        stakeholders together to understand everyone’s thoughts, needs and ideas.</p>

                    <p>Due to the underlying technical complexity, understanding any limitations was also 
                        crucial early on. This was done pre user research to provide clarity of the product 
                        design process.
                    </p>
                </div>
                <div className="right-content">
                    <img src={DesignSprint} alt="Design Sprint" />
                </div>
            </div>

            <div className="intro">
            
                <div className="left-content">
                <h2>User Research</h2>
                    <p>User interviews were completed that provided insight into the day to day 
                        usage of the product, it became apparent that stakeholder expectations 
                        and actual user usage were misaligned.</p>

                    <p>The key problem statements were identified & communicated.
                    </p>
                </div>
                <div className="right-content">
                    <div className="img-container">
                        <img src={Powerpoint} alt="Design Sprint" />
                    </div>
                
                 </div>
                <div className="problem">
                    <h3>Primary Problem</h3>
                    <p>“I have received a notification that my file has failed, what’s gone wrong & how can I fix it.”</p>
                </div>
                <div className="problem">
                    <h3>Secondary Problem</h3>
                    <p>“I need visibility of all my file traffic so I can make sure all my files are being sent successfully.”</p>
                </div>
            </div>

            <div className="intro">
                <h2>The Scope</h2>
                <p>
                User requirements were detailed and delivered, to clarify what users truly needed from the product. 
                This resulted in a reduction in scope for the product requirements to simplify an overly complex current solution.
                </p>
                {/* <div className="scope-container">
                    <img src={Powerpoint} alt="Design Sprint" />
                </div> */}

                <div className="scope-img">
                    <img src={ReqsDocument} alt="Design Sprint" />
                </div>
            </div>
            <div className="intro">
                <div className="left-content">
                    <h2>The Experience</h2>
                    <p>Defining the flow of the product began on whiteboard, 
                        then through to a low fidelity mockups used to validate the design with users. </p>
                </div>
                <div className="right-content">
                    <div className="img-container">
                        <span>
                            <img src={userFlows} alt="Design Sprint" />
                        </span>
                        <span>
                            <img src={userFlows2} alt="Design Sprint" />
                        </span>
                    </div>
                
                 </div>
                
            </div>
            <div className="intro">
                <h2>Low Fidelity</h2>
                <p>
                A low fidelity design was created then migrated into a fully functional prototype using Adobe XD. 
                This provided insight into how the product as a whole would feel to the user. Through rounds of 
                iteration the design was enhanced to meet the users needs.
                </p>
               
                <div className="image-master">
                    <a href={lowFidLanding} target="_blank" rel="noreferrer noopener" className="image-1">
                        <img src={lowFidLanding} alt="Design Sprint" />
                    </a>
                    <a href={lowFidFileDetail} target="_blank" rel="noreferrer noopener" className="image-2">
                        <img src={lowFidFileDetail} alt="Design Sprint" />
                    </a>
                    <a href={lowFidFileList} target="_blank" rel="noreferrer noopener" className="image-3">
                        <img src={lowFidFileList} alt="Design Sprint" />
                    </a>
                    <a href={lowfidTheme} target="_blank" rel="noreferrer noopener" className="image-4">
                        <img src={lowfidTheme} alt="Design Sprint" />
                    </a>
                   
                </div>

            </div>

            <div className="intro">
                <h2>The Solution</h2>
                <p>
                Once all enhancements had been made to the low fidelity design and validated using user feedback 
                the design was then ready to move onto the high fidelity phase where the user interface would come to life.
                </p>
               
                <div className="image-master">
                    <a href={finDashboard} target="_blank" rel="noreferrer noopener" className="image-1">
                        <img src={finDashboard} alt="Design Sprint" />
                    </a>
                    <a href={finFileList} target="_blank" rel="noreferrer noopener" className="image-2">
                        <img src={finFileList} alt="Design Sprint" />
                    </a>
                    <a href={finFileList2} target="_blank" rel="noreferrer noopener" className="image-3">
                        <img src={finFileList2} alt="Design Sprint" />
                    </a>
                    <a href={finTheme} target="_blank" rel="noreferrer noopener" className="image-4">
                        <img src={finTheme} alt="Design Sprint" />
                    </a>
                    
                    test
                   
                </div>

                <div className="mobile-master">
                    <a href={mobDashboard} target="_blank" rel="noreferrer noopener" className="image-1">
                        <img src={mobDashboard} alt="Design Sprint" />
                    </a>
                    <a href={mobLising} target="_blank" rel="noreferrer noopener" className="image-2">
                        <img src={mobLising} alt="Design Sprint" />
                    </a>
                    <a href={mobDocument} target="_blank" rel="noreferrer noopener" className="image-3">
                        <img src={mobDocument} alt="Design Sprint" />
                    </a>
                </div>

            </div>
        
            </div>
        </div>
    )

}

export default ProjectsFileandDocument;