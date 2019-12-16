import React from 'react';
import '../styles/element-styles/banners.css';
import {faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BannerScreen from '../styles/assets/banner-example.png';
import DesignNavi from '../design/design-navi';

const Banners = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Banners</h1>
                <p className="article-section">A banner is used to provide site wide information to the user. It is docked to the top of the page & provides information that is associated to the whole application e.g. Session Expiry.</p>
            </div>
            <div className="page-content">
                <div className="banner">
                    <span className="banner-icon"><FontAwesomeIcon icon={faExclamationTriangle} size="2x" /></span>
                    <div className="banner-text">
                        <h2>Session Timeout</h2>
                        <p>Your session is due to expire in 4.31mins, you will be logged out unless you choose to continue your session. 
                        </p>
                    </div>
                    <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" size="2x" /></span>
                </div>
                <div className="banner-screen">
                    <img src={BannerScreen} alt="Banner Screen Example" />
                </div>
            </div>
        </div>
        </div>
    ); 
}

export default Banners;