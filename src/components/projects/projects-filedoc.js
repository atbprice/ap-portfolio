import React from 'react';
import {NavLink} from 'react-router-dom';

const ProjectsFileandDocument = () => {
    return (
        <div className="master-container">
            <NavLink to="/projects" className="item"> Back to projects</NavLink>
            <h1>File and Document Visibility</h1>
        </div>
    )

}

export default ProjectsFileandDocument;