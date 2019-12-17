import React from 'react';
import '../styles/dev/dev-main.css';
import ComponentNavi from './dev-navi';

const DevMain = () => {
    return (

        <div className="grid-display">
        <ComponentNavi />
            <div className="primary-container design-guidelines">
                <div className="page-heading">
                    <h1>Component Library</h1>
                    <p className="article-section">
                        Our component library has been created to provide a reusable components to ensure a consistent experience is provided to our users. All components are owned & maintained by Data Interchange & bring together design & development.
                    </p>
                </div>
                <div className="page-content">
                    <div className="component-template">
                        <h2 className="comp-title">Button</h2>
                        <span className="comp-tag">{"<di-button></di-button>"}</span>
                        <p className="article-section">Data interchange React button component.</p>
                        <div className="install-tag">
                            <span>Install</span>
                            <span className="include-tag">npm install @data-interchange/di-button</span>
                        </div>
                        <span className="line-break"></span>
                        <p className="article-section" >Buttons are used to trigger actions, whether that’s submitting a form, acknowledging a message or 
                            any other system wide action.</p>
                        <div className="usage-section">
                            <h3>Usage</h3>
                            <div className="import-text">
                                <div className="code-tag">
                                    <span className="pink">import</span>
                                    <span className="plain-text">Button from</span>
                                    <span className="green-code">@data-interchange/di-button</span>;
                                </div>
                            </div>
                        </div>
                        <div className="example-button">
                        <button className="primary-btn btn test">Button</button>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default DevMain;