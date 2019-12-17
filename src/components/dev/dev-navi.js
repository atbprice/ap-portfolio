import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const ComponentNavi = () => {
    return (
        <div className="navi">
            <div className="navi-menu">
            
            
            <div className="menu">
                <NavLink to="/dev/button-component" className="item">Button</NavLink>
                
            </div>

            </div>
           
        </div>

    )
}

export default ComponentNavi;