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
                    <p>Built to instill the core values of our business</p>
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
                <div className="company-react">
                    <span><img className="di-logo" src={DIlogo} alt="" /></span>
                    <span>+</span>
                    <span><img src={ReactImage} alt="" /></span>
                </div>
            </div>
         </div>


        
    );
}

export default dsLanding;