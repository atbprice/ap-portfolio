import React from 'react';
import './text-fields.css';
import InputExample from '../../../styles/assets/input-example.png';
import DesignNavi from '../../navi/design-navi';


const TextField = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
       
        <div className="primary-container">
            <div className="page-heading">
                <h1>Text Fields</h1>
                <p>Text fields are to be used within forms to help people enter, select, and search for text. Text fields are normally found within a form but can also be part of a modal, 
                search, or card.</p>
            </div>
            <div className="page-content">
            <div className="text-fields">
               
                    <div></div>
                    <div className="textfield-example">
                        <img src={InputExample} alt="input example" />
                    </div>
               
            </div>
            
           
            <div className="text-fields">
                <h3>Standard Input</h3>
                <p>Buttons are to be consumed within a multitude of different scenario’s. The stan</p>
                    <div className="container-row field-details">
                        <div className="input-container">
                            {/* <h4>Input Field</h4> */}
                            <div className="input-field">
                                <span className="input-label">Field Label</span>
                                <input placeholder="This is placeholder text" />
                                <span className="required-flag"></span>
                                {/* <span className="required-message ">helper text location</span> */}
                            </div>
                        </div>
                    </div>
                    <h3>Field Validation</h3>
                    <p>Field validation is an important part of any interface. Providing feedback to the user improves usability.</p>
                    <div className="text-grid">
                        <div className="sub-text left">
                            <h4>Positive helper</h4>
                            <p>A positive helper is available to provide positive feedback to the user when entering a value into an input.</p>
                            <div className="input-field">
                                <span className="input-label">Email</span>
                                <input placeholder="Email Address" />
                                {/* <span className="required-flag"></span> */}
                                <span className="required-message green">Valid email address</span>
                            </div>
                        </div>
                        <div className="sub-text right">
                            <h4>Negative helper</h4>
                            <p>A negative helper is used when a value has either been missed or is invalid based on the field.</p>
                            <div className="input-field">
                                <span className="input-label">Email</span>
                                <input placeholder="Email Address" />
                                <span className="required-flag"></span>
                                <span className="required-message ">Invalid email address</span>
                            </div>
                        </div>
                    </div>
                    <h3>Input with icon</h3>
                    <p>Icons within inputs is to be used to emphasise the format of information to be provided.</p>
                    <div className="text-grid">
                        <div className="sub-text left">
                            <h4>Standard input with icon</h4>
                            <p></p>
                            <div className="input-field">
                                <span className="input-label">Email</span>
                                <input placeholder="Email Address" />
                                <span className="email-icon">@</span>
                            </div>
                        </div>
                        <div className="sub-text right">
                            <h4>Positioning</h4>
                            <p></p>
                            <div className="input-field">
                                <span className="input-label">Email</span>
                                <input placeholder="Email Address" />
                                <span className="email-icon">@</span>
                                <div className="helper">
                                    <span className="horiz-line"></span>
                                    <span className="vert-line"></span>
                                    <p>15px</p>
                                </div>

                            </div>
                        </div>
                    </div>  

                    {/* <h3>Input with icon</h3>
                    <p>Icons within inputs is to be used to emphasise the format of information to be provided.</p> */}
                    <div className="text-grid">
                        <div className="sub-text left">
                            <h4>Disabled input</h4>
                            <p></p>
                            <div className="input-field">
                                <span className="input-label">Field Label</span>
                                <input className="disabled-input" disabled placeholder="This is placeholder text...." />
                            </div>
                        </div>
                        <div className="sub-text right">
                            
                        </div>
                    </div>



                </div>
            </div>
        </div>
        </div>
    );
}

export default TextField;