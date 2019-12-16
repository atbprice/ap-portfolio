import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const DesignNavi = () => {
    return (
        <div className="navi">
            <div className="navi-menu">
            
            <div className="header">DS.Core</div>
            <div className="menu">
                <NavLink to="/core/colours" className="item">Colours</NavLink>
                <NavLink to="/core/typeface" className="item">Typography</NavLink>
                <NavLink to="/core/icons" className="item">Icons</NavLink>
                <NavLink to="/core/cards" className="item">Cards</NavLink>
            </div>
            <div className="header">DS.Components</div>
            <div className="menu">
                <NavLink to="/elements/avatars" className="item">Avatars</NavLink>
                <NavLink to="/elements/banners" className="item">Banners</NavLink>
                <NavLink to="/elements/breadcrumbs" className="item">Breadcrumbs</NavLink>
                <NavLink to="/elements/buttons" className="item">Buttons</NavLink>
                <NavLink to="/elements/data-list" className="item">Data List</NavLink>
                <NavLink to="/elements/dropdowns" className="item">Dropdowns</NavLink>
                <NavLink to="/elements/text-field" className="item">Text Field</NavLink>
                <NavLink to="/elements/notifications" className="item">Notifications</NavLink>
                <NavLink to="/elements/toggles" className="item">Toggles</NavLink>
                <NavLink to="/elements/tooltips" className="item">Tooltips</NavLink>
                
            </div>

            </div>
           
        </div>

    )
}

export default DesignNavi;