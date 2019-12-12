import React from 'react';
import '../styles/core-styles/typography.css';
import DesignNavi from '../design/design-navi';


const Typography = () => {
    return(
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Typography</h1>
                <p>Text is the most important element of Data interchange products. It delivers content to the user for a wide variety of use cases.</p>
            </div>
            <div className="page-content">
            <h2>Font Stacks</h2>
                <p>Data Interchange have selected the below font stacks to be  utilised across all mediums.</p>

                <div className="font-container">
                    <span className="co-font huge">Co Headline</span>
                    <p>Co Headline is the font be used for headers, titles & other text where extra emphasis is required.</p>
                </div>
                <div className="font-container">
                    <span className="roboto-font huge">Roboto</span>
                    <p>Roboto has been selected as our primary font this is to be used as the body font for all applications.</p>
                </div>
                <hr />
                <div className="type-sizes">
                    <div className="co-type co-font">
                        <div className="type-block">
                            <span className="rem-size roboto-font">2.1875rem</span>
                            <span className="text huge">Example Text</span>
                            <span className="px-size roboto-font">(35px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1.875rem</span>
                            <span className="text large">Example Text</span>
                            <span className="px-size roboto-font">(30px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1.5625rem</span>
                            <span className="text big">Example Text</span>
                            <span className="px-size roboto-font">(25px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1rem</span>
                            <span className="text">Example Text</span>
                            <span className="px-size roboto-font">(16px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">0.875rem</span>
                            <span className="text small">Example Text</span>
                            <span className="px-size roboto-font">(14px)</span>
                        </div>
                    </div>
                    <div className="roboto-type roboto-font">
                        <div className="type-block">
                            <span className="rem-size roboto-font">2.1875rem</span>
                            <span className="text huge">Example Text</span>
                            <span className="px-size roboto-font">(35px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1.875rem</span>
                            <span className="text large">Example Text</span>
                            <span className="px-size roboto-font">(30px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1.5625rem</span>
                            <span className="text big">Example Text</span>
                            <span className="px-size roboto-font">(25px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">1rem</span>
                            <span className="text">Example Text</span>
                            <span className="px-size roboto-font">(16px)</span>
                        </div>
                        <div className="type-block">
                            <span className="rem-size roboto-font">0.875rem</span>
                            <span className="text small">Example Text</span>
                            <span className="px-size roboto-font">(14px)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    
    );
}

export default Typography;