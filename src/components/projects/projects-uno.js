import React from 'react';
import {NavLink} from 'react-router-dom';

const ProjectsUno = () => {
    return (
        <div className="master-container">
            <NavLink to="/projects" className="item"> Back to projects</NavLink>
            <h1>Uno</h1>
        </div>
    )

}

export default ProjectsUno;