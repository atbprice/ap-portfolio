import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return(
        <div className="banner-header">
           
            <div className="top-navi">
                
                <NavLink to="/" className="item ">Home</NavLink>
                <NavLink to="/process/process-main" className="item">My Process</NavLink>
                <NavLink to="/projects/projects-main" className="item">Projects</NavLink>
            </div>
        </div>
    );
}

export default Header;