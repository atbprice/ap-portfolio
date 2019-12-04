import React from 'react';
import exampleButton from '../styles/assets/example-button.png';
import StandardHeightButton from '../styles/assets/standard-height-button.png';
import SmallHeightButton from '../styles/assets/small-height-button.png'
import '../styles/element-styles/buttons.css'; 

const Buttons = () => {
    return (
        <div className="primary-container">
            <div className="page-heading">
                <h1>Buttons</h1>
                <p>Buttons are to be used to trigger actions, they can contain, text, icons or both. Usage is dependant on the use case with a limited number of variables. Button widths are variable based on the implementation, a standard
                width of 250px should solve the majority of design challenges but this is not a rigid property.</p>
            </div>
            {/*Example button */}
        <div className="page-content">
            <div className="example">
                <img src={exampleButton} alt="Example Button" />
            </div>
             {/*Example Sizes */}
            <h3>Button Sizes</h3>
            <p>Buttons are to be consumed within a multitude of different scenario’s. The standard button height is to be used as the default option, this is to be used for all form based implementations. The small button option
                is to be used when the standard isn’t suitable for the implementation.  </p>
            <div className="container-row">
                <div className="btn-container">
                    <img className="example-btn-standard" src={StandardHeightButton} alt="button" />
                </div>
                <div className="btn-container">
                    <img className="example-btn-small" src={SmallHeightButton} alt="button" />
                </div>
            
            </div>
             {/*Buttons including CSS */}
            <h3>Primary Button</h3>
            <div className="container-row"> 
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="primary-btn btn">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #211554;<br />
                        height: 40px;<br />
                        border-radius: 25px;<br />
                        color: #FFFFFF;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;<br />
                        line-height: 40px;<br />
                        text-align: center;<br />
                        min-width: 220px;<br /></p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="primary-btn btn hover">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #4E35B7;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="primary-btn btn disabled">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                
            </div>
            <h3>Secondary Button</h3>
            <div className="container-row">
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="secondary-btn btn">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #FFFFFF;<br />
                        border:2px solid #211554;<br />
                        height: 40px;<br />
                        border-radius: 25px;<br />
                        color: #211554;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;<br />
                        line-height: 40px;<br />
                        text-align: center;<br />
                        min-width: 220px;<br /></p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="secondary-btn btn hover">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #C6C6C6;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="secondary-btn btn disabled">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
            </div>
            <h3>Delete Button</h3>
            <div className="container-row">
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="delete-btn btn">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #DB2D43;<br />
                        height: 40px;<br />
                        border-radius: 25px;<br />
                        color: #FFFFFF;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;<br />
                        line-height: 40px;<br />
                        text-align: center;<br />
                        min-width: 220px;<br /></p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="delete-btn btn hover">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #ED001D;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="delete-btn btn disabled">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
            </div>
            <h3>Secondary Delete Button</h3>
            <div className="container-row">
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="delete-second-btn btn">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #DB2D43;<br />
                        height: 40px;<br />
                        border-radius: 25px;<br />
                        color: #FFFFFF;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;<br />
                        line-height: 40px;<br />
                        text-align: center;<br />
                        min-width: 220px;<br /></p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="delete-second-btn btn hover">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #ED001D;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="delete-second-btn btn disabled">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
            </div>

            <h3>Pending Action Button</h3>
            <div className="container-row">
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="pending-btn btn">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #E3AB2A;<br />
                        height: 40px;<br />
                        border-radius: 25px;<br />
                        color: #FFFFFF;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;<br />
                        line-height: 40px;<br />
                        text-align: center;<br />
                        min-width: 220px;<br /></p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="pending-btn btn hover">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #B17F0C;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="pending-btn btn disabled">Button</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
            </div>




            <h3>Icon Button</h3>
            <p>Icon buttons are to be used where appropriate for their reduced size or obvious actions. Icons selected must adhere to recognised patterns e.g. X for cancel / delete.</p>
            <div className="container-row">
                <div class="btn-container">
                    <span className="btn-title">Base</span>
                    <button className="delete-icon-btn">X</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #EFDFDE;<br />
                        height:50px;<br />
                        width: 50px;<br />
                        box-shadow: 0px 0px 0px 1px rgba(172,2,23,0.3);<br />
                        color: #DB2D43;<br />
                        border-radius: 50px;<br />
                        font-weight: bold;<br />
                        font-size:1.10rem;</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Hover</span>
                    <button className="delete-icon-btn hover">X</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>background-color: #E89E99;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
                <div class="btn-container">
                    <span className="btn-title">Disabled</span>
                    <button className="delete-icon-btn disabled">X</button>
                    <div className="btn-styles">
                        <b>CSS</b>
                        <p>opacity: 0.40;<br />
                         *all other styles inherited from base</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    )
}

export default Buttons;