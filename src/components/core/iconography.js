import React from 'react';
import { faChartBar,
     faDolly, 
     faUserFriends, 
     faFileCode, 
     faPen, 
     faLock, 
     faUnlockAlt, 
     faChevronLeft, 
     faChevronRight,
    faCheckCircle,
    faTimesCircle,
    faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/core-styles/iconography.css'
import serverIcon from '../styles/assets/server-icon.png';
import connectIcon from '../styles/assets/connect-icon.png';
import invoiceIcon from '../styles/assets/invoice-icon.png'



const Iconography = () => {
    return(
        <div className="primary-container">
            <div className="page-heading">
                <h1>Iconography</h1>
                <p>Icons are visual representations of commands or common actions and are used to visually enhance the interface & improve usability.<br />
                    They should adhere to existing  be simple, yet bold enough to grab attention, and leave a lasting impression. <br />
                    We also have object icons which are grouped and color-coded by use case, and are derived from this iconography foundation.</p>
            </div>
            <div className="page-content">
                <h2>Navigation Icons</h2>
                <p>These icons are to be used for the navigation of the application, each distinct area of the platform will have its own associated icon.</p>
                <div className="icon-block">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faChartBar} size="3x" />
                        <span className="fnt-tag">faChartBar</span>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faDolly} size="3x" />
                        <span className="fnt-tag">faDolly</span>
                        <h4>Customers</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faUserFriends} size="3x" />
                        <span className="fnt-tag">faUserFriends</span>
                        <h4>Users</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faFileCode} size="3x" />
                        <span className="fnt-tag">faFileCode</span>
                        <h4>APi</h4>
                    </div>
                </div>
                
                <h2>Command Icons</h2>
                <p>Icons defined as command icons are used to simplify the UI & reduce the amount of text on screen. Each command icon has to provide
                an obvious use case.</p>
                <div className="icon-block">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faPen} size="3x" />
                        <span className="fnt-tag">faPen</span>
                        <h4>Edit</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faLock} size="3x" />
                        <span className="fnt-tag">faLock</span>
                        <h4>Lock</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faUnlockAlt} size="3x" />
                        <span className="fnt-tag">faUnlockAlt</span>
                        <h4>Unlock</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
                        <span className="fnt-tag">faChevronLeft</span>
                        <h4>Left Arrow</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faChevronRight} size="3x" />
                        <span className="fnt-tag">faChevronRight</span>
                        <h4>Right Arrow</h4>
                    </div>
                </div>
                <h2>Input Icons</h2>
                <p>Icons defined as command icons are used to simplify the UI & reduce the amount of text on screen. Each command icon has to provide
                an obvious use case.</p>
                <div className="icon-block">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                        <span className="fnt-tag">faCheckCircle</span>
                        <h4>Success / Active</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faTimesCircle} size="3x" />
                        <span className="fnt-tag">faTimesCircle</span>
                        <h4>Error / Disabled</h4>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                        <span className="fnt-tag">faExclamationTriangle</span>
                        <h4>Warning / Pending</h4>
                    </div>
                </div>
                <h2>Brand Icons</h2>
                <p>Icons defined as brand based are used to improve the visual appeal of a view. e.g. dashboard.</p>
                <div className="icon-container">
                    <img alt="server icon" className="icon-img" src={serverIcon} />
                    
                </div>
                <div className="icon-container">
                    <img alt="server icon" className="icon-img" src={connectIcon} />
                   
                </div>
                <div className="icon-container">
                    <img alt="server icon" className="icon-img" src={invoiceIcon} />
                   
                </div>
            </div>

        </div>

    );
}

export default Iconography;