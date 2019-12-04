import React from 'react';
import './styles/dsLanding.css'
import { Link } from 'react-router-dom';

const dsLanding = () => {
    return(
        <div className="main-content">
             <div className="top">
             Design System landing page
             <div className="corp-logo">

             </div>
            </div>
            <div className="bottom-left">
                <Link className="section-link" to="/">
                <div className="title">Ds<span></span></div>
                <div className="text">Design System</div>
                <span className="icon"></span>
                </Link>
                
            </div>
            <div className="bottom-right">
                <Link className="section-link" to="/" >
                    <div className="title">Cl<span></span></div>
                    <div className="text">Component Library</div>
                    <span className="icon"></span>
               
                </Link>
            </div>
        </div>


        
    );
}

export default dsLanding;