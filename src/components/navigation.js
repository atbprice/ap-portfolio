import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation.css'

const Navigation = () => {
    return(
       
        <div className="ui navi">
            <div className="top-line">
                <span className="logo"></span>
                <Link to="/" className="core-link">Ds</Link>
                <span className="stripe"></span>
            </div>
            <div className="ui vertical menu">
            <div className="header">DS.Core</div>
            <div className="menu">
                <Link to="/core/colours" className="item">Colours</Link>
                <Link to="/core/typeface" className="item">Typography</Link>
                <Link to="/core/icons" className="item">Icons</Link>
                <Link to="/core/cards" className="item">Cards</Link>
            </div>
            <div className="header">DS.Components</div>
            <div className="menu">
                <Link to="/elements/avatars" className="item">Avatars</Link>
                <Link to="/elements/banners" className="item">Banners</Link>
                <Link to="/elements/breadcrumbs" className="item">Breadcrumbs</Link>
                <Link to="/elements/buttons" className="item">Buttons</Link>
                <Link to="/elements/data-list" className="item">Data List</Link>
                <Link to="/elements/dropdowns" className="item">Dropdowns</Link>
                <Link to="/elements/text-field" className="item">Text Field</Link>
                <Link to="/elements/notifications" className="item">Notifications</Link>
                <Link to="/elements/toggles" className="item">Toggles</Link>
                
            </div>

            </div>
           
        </div>
    )
}
export default Navigation;