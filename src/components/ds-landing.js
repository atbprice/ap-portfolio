import React from 'react';
import './styles/dsLanding.css'
import ReactImage from './styles/assets/react-icon.png';
//import Hero from './styles/assets/hero.png';
import DIlogo from './styles/assets/logo.png';
import DesignHero from './styles/assets/coder.png';

const dsLanding = () => {
    return(
        <div>
            <div className="main-content">
                <div className="title-text">
                    <h1>Design System</h1>
                    <p>Built to instill the core values of our business, this design resource provides the guidelines
                        for designing & developing Data Interchange customer solutions. </p>
                </div>
                <div className="hero-image">
                    <img src={DesignHero} alt="hero" />
                </div>
            </div>
            <div className="brand-values">
                <span>Bold</span>
                <span>Confident</span>
                <span>Interesting</span>
                <span>Pioneering</span>
                <span>Distinctive</span>
            </div>
            <div className="detail-container">
                <span className="react-questions">
                    <h3>Following our Design System, we have developed a React component library. This contains a growing list of high quality components for building high quality experiences.</h3>
                </span>
                <div className="company-react">
                    <span><img className="di-logo" src={DIlogo} alt="" /></span>
                    <span>+</span>
                    <span><img src={ReactImage} alt="" /></span>
                </div>
                <div className="react-context">
                <span className="include-tag"><h4>{"@data-interchange/{component-name}"}</h4></span>
                </div>
            </div>
         </div>


        
    );
}

export default dsLanding;