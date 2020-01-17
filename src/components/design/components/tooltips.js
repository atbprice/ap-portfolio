import React from 'react';
import DesignNavi from '../design-navi';
import ToolTip from '../../styles/assets/tooltip.png';
import '../../styles/design/element-styles/tooltips.css';

const ToolTips = () => {
    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
            <div className="page-heading">
                <h1>Tooltips</h1>
                <p className="article-section">Tooltips are used to provide a small amount of information to an element
                Typically, tooltips are used to help users understand the meaning or purpose of icons,showing the full version 
                of truncated text, or displaying the alt text for an image. </p>
            </div>
                <div className="page-content ">
                   <img className="tooltip-image" src={ToolTip} alt="" />

                   <h2>Positioning</h2>
                   <p className="article-section">
                       The positioning of a tooltip is flexible and will vary depending on the use case, also the location of it on the screen & the volume of content.
                   </p>
                </div>
            </div>
        </div>
    )
}

export default ToolTips;




