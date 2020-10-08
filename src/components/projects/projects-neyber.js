import React from 'react';
import {NavLink} from 'react-router-dom';

const ProjectsNeyber = () => {
    return (
        <div className="master-container">
            <NavLink to="/projects" className="item"> Back to projects</NavLink>
            <h1>Neyber</h1>
        </div>
    )

}

export default ProjectsNeyber;