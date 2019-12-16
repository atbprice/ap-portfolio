import React from 'react';
import {NavLink} from 'react-router-dom';
import corpLogo from './styles/assets/DI-full.png';

const Header = () => {
    return(
        <div className="banner-header">
            <div className="corp-logo">
                <NavLink to="/" className="item"><img className="header-logo" src={corpLogo} alt="" /></NavLink>
            </div>
            <div className="top-navi">
                
                <NavLink to="/brand/brand-main" className="item disabled">Our Brand </NavLink>
                <NavLink to="/design/design-main" className="item">Design Guidelines</NavLink>
                <NavLink to="/dev/dev-main" className="item">Component Library</NavLink>
            </div>
        </div>
    );
}

export default Header;