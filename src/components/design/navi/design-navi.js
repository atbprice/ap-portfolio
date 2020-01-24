import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navigation.css';

const DesignNavi = () => {
    return (
        <div className="navi">
            <div className="navi-menu">
                <div>
                    <div className="header">Principles</div>
                <div className="menu">
                    <NavLink to="/core/accessibility" className="item">Accessibility</NavLink>
                    <NavLink to="/core/usability" className="item">Usability</NavLink>
                    <NavLink to="/core/responsive" className="item">Responsive</NavLink>
                </div>
                </div>
                
                <div className="header">Visual</div>
                <div className="menu">
                    <NavLink to="/core/colours" className="item">Colour</NavLink>
                    <NavLink to="/core/typeface" className="item">Font</NavLink>
                    <NavLink to="/core/icons" className="item">Icons</NavLink>
                </div>
                <div className="header">Patterns</div>
                <div className="menu">
                    <NavLink to="/core/cards" className="item">Card</NavLink>
                    <NavLink to="/core/panel" className="item">Panel</NavLink>
                    <NavLink to="/patterns/data-entry" className="item">Data Entry</NavLink>
                    <NavLink to="/patterns/displaying-data" className="item">Displaying Data</NavLink>
                    <NavLink to="/patterns/empty-state" className="item">Empty State</NavLink>
                    <NavLink to="/patterns/loading" className="item">Loading</NavLink> 
                    {/* <NavLink to="/core/forms" className="item">Forms</NavLink> */}
                </div>
                <div className="header">Components</div>
                <div className="menu">
                    <NavLink to="/components/avatars" className="item">Avatar</NavLink>
                    <NavLink to="/components/banners" className="item">Banner</NavLink>
                    <NavLink to="/components/breadcrumbs" className="item">Breadcrumb</NavLink>
                    <NavLink to="/components/buttons" className="item">Button</NavLink>
                    
                    <NavLink to="/components/checkbox" className="item">Checkbox</NavLink>
                    <NavLink to="/components/data-list" className="item">Data Grid</NavLink>
                    <NavLink to="/components/radio" className="item">Radio Button</NavLink>
                    <NavLink to="/components/dropdowns" className="item">Select</NavLink>
                    <NavLink to="/components/text-field" className="item">Text Field</NavLink>
                    <NavLink to="/components/tile-list" className="item">Tile List</NavLink>
                    <NavLink to="/components/toast" className="item">Toast</NavLink>
                    <NavLink to="/components/toggles" className="item">Toggles</NavLink>
                    <NavLink to="/components/tooltips" className="item">Tooltips</NavLink>
                    
                </div>
            </div>
        </div>
    )
}

export default DesignNavi;