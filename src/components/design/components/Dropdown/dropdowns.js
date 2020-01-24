import React from 'react';
import './dropdown.css';
import ExampleDropdown from '../../../styles/assets/dropdown-example.png';
import ActiveDropdown from '../../../styles/assets/active-dropdown.png';
import RequiredDropdown from '../../../styles/assets/required-dropdown.png';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DesignNavi from '../../navi/design-navi';

const Dropdowns = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Dropdown Menu</h1>
                <p className="article-section">A dropdown is used in a variety of cases where there is more than 2 potential options. This component allows the user to select from the available options. </p>
            </div>
            <div className="page-content">
                <div className="">
                    <div className="example-dropdown">
                    <label>Dropdown Menu</label>
                            <select disabled className="dropdown">
                                <option>Option 1</option>                          
                            </select> 
                            <FontAwesomeIcon icon={faChevronDown} className="chevron-down" />
                            <div className="helper-1">
                                <span className="horiz-line"></span>
                                <span className="vert-line"></span>
                                <p>40px</p>
                            </div>  
                            <div className="helper-2">
                                <span className="horiz-line"></span>
                                <span className="vert-line"></span>
                                <p>font-family:roboto;<br />
                                    font-weight:regular;<br />
                                    font-size:16px;
                                </p>
                            </div> 
                    </div>
                    <div className="drop-row">
                        <div>
                            <h4>Base</h4>
                            <label>Dropdown Menu</label>
                            <select className="dropdown">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </select> 
                            <FontAwesomeIcon icon={faChevronDown} className="chevron-down" />   
                        </div>
                        <div>
                            <h4>Active</h4>
                            <img className="drop-exp" src={ActiveDropdown} alt="Example dropdown" />    
                        </div>
                        <div>
                            <h4>Active:selected</h4>
                            <img className="drop-exp" src={ExampleDropdown} alt="Example dropdown" />      
                        </div>
                        <div>
                            <h4>Required Dropdown</h4>
                            <img className="drop-exp req" src={RequiredDropdown} alt="Example dropdown" />    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    
    
        );
}

export default Dropdowns;