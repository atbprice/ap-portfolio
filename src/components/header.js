import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return(
        <div className="banner-header">
           
            <div className="top-navi">
                
                <NavLink to="/" className="item ">Home</NavLink>
                <NavLink to="/process" className="item">Process</NavLink>
                <NavLink to="/projects" className="item">Projects</NavLink>
            </div>
        </div>
    );
}

export default Header;