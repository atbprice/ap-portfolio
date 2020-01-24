import React from 'react';
import DesignNavi from '../../navi/design-navi';
import Responsiveimage from '../../../styles/assets/responsive.png';

const Responsive = () => {
    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Responsive Design</h1>
                    <p className="article-section">
                        Responsive design is an approach towards delivering web applications, that provide a high quality experience across a variety of devices.
                        

                    </p>

                    <div className="article-section">
                        <img className="device-image" src={Responsiveimage} alt="Responsive images" />
                    </div>
                    <div className="article-section">
                        <h2>Responsive Concepts</h2>
                        <p>Providing a responsive design that responsively adapts based on the device being used is a key requirement to delivering a high quality experience.
                            To develop web applications a responsive grid is the default approach which makes resizes content based on the device width. Styling is provided using a % based approach.
                            Although this approach does help to address some of the issues, a more drastic approach is required to ensure content is legible to the user. </p>
                        <b>[content grid example]</b>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Responsive;