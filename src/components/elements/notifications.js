import React from 'react';
import '../styles/element-styles/notifications.css';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DesignNavi from '../design/design-navi';

const Notifications = () => {
    return(
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Notifications</h1>
                <p>We use notifications to primarily communicate with a user that an action or status has updated / changed. They can also be used to provide information to a user by utilising the information version.</p>
            </div>
            <div className="page-content">
            <h2>Toast</h2>
            <p>A toast is used to provide feedback for a performed action e.g. saving a form.</p>
                <div className="example-toast">
                   <div className="toast green">
                       <span className="icon-placeholder"></span>
                       <div className="toast-text">
                            <h2>Title</h2>
                            <p>Sub text</p>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                   <div className="helper-1">
                        <span className="horiz-line"></span>
                        <span className="vert-line"></span>
                        <p>Height 60px</p>
                    </div> 
                    <div className="helper-2">
                        <span className="horiz-line"></span>
                        <span className="vert-line"></span>
                        <p>Width 250px</p>
                    </div> 
                </div>
                <div className="container-row">
                <div>
                <h4>Success Toast</h4>
                <p>The success toast is to be used for provided positive messages to the user upon completion of activities.</p>
                <div className="toast green">
                       <span className="icon-location"><FontAwesomeIcon icon={faCheckCircle} className="" size="2x" /></span>
                       <div className="toast-text">
                            <h2>Success</h2>
                            <p>You saved successfully.</p>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                </div>
                <div>
                <h4>Error Toast</h4>
                <p>The Error message is to be used to highlight failures during usage.</p>
                <div className="toast red">
                <span className="icon-location"><FontAwesomeIcon icon={faTimesCircle} className="" size="2x" /></span>
                       <div className="toast-text">
                            <h2>Error</h2>
                            <p>There has been an error.</p>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                </div>
                <div>
                <h4>Warning Toast</h4>
                <p>Warning toasts are to be provided where a potential issue may arise, or a change of status.</p>
                <div className="toast orange">
                <span className="icon-location"><FontAwesomeIcon icon={faExclamationTriangle} className="" size="2x" /></span>
                       <div className="toast-text">
                            <h2>Warning</h2>
                            <p>Something could fail.</p>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                </div>
                <div>
                <h4>Information Toast</h4>
                <p>Information toast is used to provide information relevant to the user.</p>
                <div className="toast purple">
                <span className="icon-location"><FontAwesomeIcon icon={faInfoCircle} className="" size="2x" /></span>
                       <div className="toast-text">
                            <h2>Information</h2>
                            <p>Update available</p>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                </div>
                <div>
                    <h4>Information Detail Toast</h4>
                    <p>This toast is to be used to provide more a more indepth level of information to the user.</p>
                <div className="info-toast">
                <span className="icon-location"><FontAwesomeIcon icon={faInfoCircle} className="" size="2x" /></span>
                       <div className="toast-text">
                            <h2>Information</h2>
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.</p>
                                <span className="notif-confirm">Thanks</span>
                                <span className="notif-save">Store for Later!</span>
                            <span className="cancel"><FontAwesomeIcon icon={faTimes} className="chevron-down" /></span>
                        </div>   
                   </div>
                </div>
                </div>
            </div>
        </div>
        </div>
       
        
        );
}

export default Notifications;