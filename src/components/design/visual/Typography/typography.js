import React from 'react';
import './typography.css';
import DesignNavi from '../../navi/design-navi';


const Typography = () => {
    return(
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Typography</h1>
                <p className="article-section">
                    Text is the primary method of communication across all outputs. We provide a typographic scale that
                     ensures consistency across our product suite.
                    </p>
            </div>
            <div className="page-content">
            <h2>Fonts</h2>
                <p className="article-section">Data Interchange have selected the below core fonts to be utilised across all mediums.</p>

                <div className="font-container">
                    <span className="co-font huge">Co Headline</span>
                    <span className="roboto-font huge">Roboto</span>
                    
                </div>
               
                <hr />
                <div className="type-sizes">
                        <div className="type-block">
                            <span className="text huge">Example Text</span>
                        </div>
                        <div className="font-details">
                        <h4>Properties</h4>
                        <p>font size: 35px / 2.1875rem</p>
                        <p>font weight: 35px</p>
                        <p>Line Height: 35px</p>
                        <p>Margin Top: 35px</p>
                        <h4>Usage</h4>
                        <p>h1 titles</p>
                    </div>
                </div>
                <div className="type-sizes">
                        <div className="type-block">
                            <span className="text large">Example Text</span>
                        </div>
                        <div className="font-details">
                        <h4>Properties</h4>
                        <p>font size: 30px / 1.875rem</p>
                        <p>font weight: 35px</p>
                        <p>Line Height: 35px</p>
                        <p>Margin Top: 35px</p>
                        <h4>Usage</h4>
                        <p>h2 titles</p>
                    </div>
                </div>
                <div className="type-sizes">
                        <div className="type-block">
                            <span className="text big">Example Text</span>
                        </div>
                        <div className="font-details">
                        <h4>Properties</h4>
                        <p>font size: 25px / 1.5625rem</p>
                        <p>font weight: 35px</p>
                        <p>Line Height: 35px</p>
                        <p>Margin Top: 35px</p>
                        <h4>Usage</h4>
                        <p>h3 titles</p>
                    </div>
                </div>  
                <div className="type-sizes">
                        <div className="type-block">
                            <span className="text small">Example Text</span>
                        </div>
                        <div className="font-details">
                        <h4>Properties</h4>
                        <p>font size: 14px / 0.875rem</p>
                        <p>font weight: 35px</p>
                        <p>Line Height: 35px</p>
                        <p>Margin Top: 35px</p>
                        <h4>Usage</h4>
                        <p>Standard Text</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        

    
    );
}

export default Typography;