import React from 'react';
import {NavLink} from 'react-router-dom';

import DashboardMain from '../styles/assets/FileDoc/landing.png';
import Theme from '../styles/assets/FileDoc/Theme.png';
import advfilter from '../styles/assets/FileDoc/advfilter.png';
import rulebuilder from '../styles/assets/FileDoc/rulebuilder.png';

const ProjectsFileandDocument = () => {
    return (
        <div className="home-content">
            <NavLink to="/projects" className="item"> Back to projects</NavLink>
            <div className="project-title">
                <h1>File and Document Visibility</h1>
                <p>A digital migration of an established product to better align with 
                growing user / business requirements.</p>
            </div>         
            <div className="primary-image">
                <a className="hero" target="_blank" href={DashboardMain}>
                    <img src={DashboardMain} alt="Forest" />
                </a>
            </div>

            <div className="image-master">
                <a className="image-1" target="_blank" href={DashboardMain}>
                    <img src={DashboardMain} alt="Forest" />
                </a>
                <a className="image-2" target="_blank" href={advfilter}>
                    <img src={advfilter} alt="Forest" />
                </a>
                <a className="image-3" target="_blank" href={rulebuilder}>
                    <img src={rulebuilder} alt="Forest" />
                </a>
                <a className="image-4" target="_blank" href={Theme}>
                    <img src={Theme} alt="Forest" />
                </a>
            </div>

        </div>
    )

}

export default ProjectsFileandDocument;