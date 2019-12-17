import React from 'react';
import ComponentNavi from './dev-navi';
import '../styles/dev/button-component.css';
import TypescriptLogo from '../styles/assets/typescript-logo.png';
import ReactLogo from '../styles/assets/react-icon.png';

const ButtonComponent = () => {

    return (
       
        <div className="grid-display">
            <ComponentNavi />
            <div className="primary-container">
                <div className="page-content">
                    <div className="comp-template">
                        <div className="template-title">
                            <div>
                                <h1>Button</h1>
                                <p className="article-section">Buttons are used to trigger actions, whether that’s submitting a form, acknowledging a message or 
                            any other system wide action.</p>
                            </div>
                            <div className="template-code-tag">
                                <span>{"<di-button></di-button>"}</span>
                            </div>
                            <img src={TypescriptLogo} className="ts-logo" alt="Typescript" />
                            <img src={ReactLogo} className="react-logo" alt="Typescript" />
                        </div>

                        <div className="example-button">
                            <button className="primary-btn btn">Button</button>
                        </div>

                        <div className="template-install">
                            <p>npm install @data-interchange/di-button</p>
                        </div>
                        <div className="template-section">
                        <p className="article-section">Buttons are used to trigger actions, whether that’s submitting a form, acknowledging a message or 
                            any other system wide action.</p>
                        </div>
                        <div className="code-section">
                            <p><span className="pink">import</span> from button <span className="green-code">@data-interchange/di-button</span></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
        
    )
}

export default ButtonComponent;