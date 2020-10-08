import React from 'react';
import {NavLink} from 'react-router-dom';

const ProjectsPayPlan = () => {
    return (
        <div className="master-container">
            <NavLink to="/projects" className="item"> Back to projects</NavLink>
            <h1>PayPlan</h1>
        </div>
    )

}

export default ProjectsPayPlan;