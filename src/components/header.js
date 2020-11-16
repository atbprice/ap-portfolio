import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return(
        <div className="top-navi">
                
                <NavLink to="/" className="item ">Projects</NavLink>
                {/* <NavLink to="/process" className="item">Process</NavLink> */}
                {/* <NavLink to="/aboutme" className="item">About Me</NavLink> */}
            </div>
        
    );
}

export default Header;