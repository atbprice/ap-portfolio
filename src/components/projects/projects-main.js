import React from 'react';
import '../styles/projects/projects-main.css';
import {NavLink} from 'react-router-dom';

const ProjectsMain = () => {
    return (

        <div className="master-container">
            <div className="page-heading">
                    <h1>My Projects</h1>
                    <p className="article-section">
                        Our component library has been created to provide a reusable components to ensure a consistent experience is provided to our users. All components are owned & maintained by Data Interchange & bring together design & development.
                    </p>
                </div>
                <div className="page-content">
                <NavLink to="/projects/uno" className="item">
                    <div className="project">
                        <h2>Project Uno</h2>
                        <p>A digital migration project at the heart of the business strategy for the next 3 years.</p>
                    </div>
                </NavLink>
                <NavLink to="/projects/fileanddocument" className="item">
                    <div className="project">
                        <h2>File and Document Visibility</h2>
                        <p>A digital migration project at the heart of the business strategy for the next 3 years.</p>
                    </div>
                </NavLink>
                <NavLink to="/projects/payplan" className="item">
                    <div className="project">
                        <h2>Payplan</h2>
                        <p>A digital migration project at the heart of the business strategy for the next 3 years.</p>
                    </div>
                </NavLink>
                <NavLink to="/projects/neyber" className="item">
                    <div className="project">
                        <h2>Neyber</h2>
                        <p>A digital migration project at the heart of the business strategy for the next 3 years.</p>
                    </div>
                </NavLink>
                <NavLink to="/projects/eyc" className="item">
                    <div className="project">
                        <h2>Loyalty Marketing Platform</h2>
                        <p>A digital migration project at the heart of the business strategy for the next 3 years.</p>
                    </div>
                </NavLink>
                   
                
                </div>
       
          
        </div>
    )
}

export default ProjectsMain;