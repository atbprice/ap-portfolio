import React from 'react';
import DesignNavi from '../design-navi';
import '../../styles/design/element-styles/toggles.css'

const Toggles = () => {
    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
            <div className="page-heading">
                <h1>Toggles</h1>
                <p>Toggles are a quick way to view and switch between enabled or disabled states. 
                    Use toggles when your intent is to turn something on or off instantly (ex. Enable public access). 
                    If a physical switch would work for the action, a toggle is probably the best component to use.</p>
            </div>
                <div className="page-content ">
                    <div className="toggle-example">
                        <input type="checkbox" id="id-name--1" name="set-name" class="switch-input" />
                        <label class="switch-label">Switch <span class="toggle--on">On</span><span class="toggle--off">Off</span></label>
                    
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Toggles;