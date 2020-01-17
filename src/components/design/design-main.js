import React from 'react';
import DesignNavi from './design-navi';

import Prototype from '../styles/assets/prototype.png';

const DesignMain = () => {
    return (
        
        <div className="grid-display">
            <DesignNavi />
            <div className="primary-container design-guidelines">
                <div className="page-heading">
                    <h1>Design Guidelines</h1>
                    <p className="article-section">Design guidelines have been created to ensure consistency across all mediums of customer interaction.
                    The purpose of these guidelines is to deliver a high quality end to end experience to users through consistent, easy to use interfaces across all devices.</p>
                </div>
                <div className="page-content">
                <div className="hero-image">
                    <img className="experience-image" src={Prototype} alt="hero" />
                </div>
                <h2>The key values of the design guidelines are:</h2>
                <p className="article-section">Delivering an end to end experience to our users that simplifies the complex & delights the user.</p>
                <p className="article-section">A consistent high quality, to everything we design.</p>
                <p className="article-section">Meeting the challenge of a truly responsive UI.</p>
                <p className="article-section">Consistency across our product range.</p>
                </div>
            </div>
        </div>
            
           
        
    )
}

export default DesignMain;