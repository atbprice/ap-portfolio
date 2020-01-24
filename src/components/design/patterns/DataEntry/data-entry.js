import React from 'react';
import DesignNavi from '../../navi/design-navi';
import textinput from '../../../styles/assets/text-input.png';
import characterlength from '../../../styles/assets/character-length.png';
import inputlabel from '../../../styles/assets/label.png';
import grouping from '../../../styles/assets/grouping.png';
import sizing from '../../../styles/assets/sizing.png';
import inputhelp from '../../../styles/assets/help.png';
import status from '../../../styles/assets/status.png';
import required from '../../../styles/assets/required.png';
import lookup from '../../../styles/assets/lookup.png';
import datepicker from '../../../styles/assets/calendar.png';
import toggle from '../../../styles/assets/toggle.png';
import radio from '../../../styles/assets/radio.png';
import checkbox from '../../../styles/assets/checkbox.png';
import select from '../../../styles/assets/select.png';



const DataEntry = () => {
    
    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Data Entry</h1>
                    <p className="article-section">
                    Our solutions provide the ability for users to manage information, users will add, 
                    update & view data across a variety of methods in our platform. To support this need,  
                    a wide variety of input controls need to be supported.   
                    </p>
                </div> 
                <div className="page-content">
                        <h2>Simple Text Input</h2>
                        <p>The most basic of controls allows a user to provide data in a flexible format.</p>
                        <img className="primary-img" src={textinput} alt="Text Input" />
                   
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Character Length</h3>
                            <p>The character length of an input should at minimum align with the database property. Restricting the 
                            format of data can be done, examples being email address or number format.</p>
                        </div>
                        <div>
                            <img src={characterlength} alt="Character Length" />
                        </div>
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Labels</h3>
                            <p>Inputs should all be displayed with a label, placement should be above the input with text aligned to 
                            the left hand corner. This is the standard with the ability to align the label to the left supported 
                            but only used where the default approach is unsuitable.</p>
                        </div>
                        <div>
                            <img src={inputlabel} alt="Input Label" />
                        </div>
                    </div>
                    <div className="info-section">
                        <h3>Grouping</h3>
                        <p>Inputs should be grouped where appropriate to provide an improved experience for the user. When grouping, 
                            providing a group title e.g. address is advised to provide clarity to the user. </p>
                            <img src={grouping} alt="Input Grouping" />
                    </div>
                    <div className="info-section fifty-split">
                        <div> 
                            <h3>Sizing</h3>
                            <p>The default font size should be used for label & input to deliver consistency to the user. This should be 
                            used unless space is reduced & a smaller font size is required.</p>
                        </div>
                        <div>
                            <img src={sizing} alt="Input Sizing" />
                        </div> 
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Input Help</h3>
                            <p>Where appropriate input help is to be provided. This is provided on an adhoc basis where the label requires 
                            additional supporting text for inexperienced users. </p>
                        </div>
                        <div>
                            <img src={inputhelp} alt="Input Help" />
                        </div>    
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Status Message</h3>
                            <p>Input status messages are to be provided where custom data patterns are required e.g. email or passwords. 
                            This message placement is underneath the input text aligned to the right hand edge. This message should be 
                            coloured based on its type & severity.</p>
                        </div>
                        <div>
                            <img src={status} alt="Input Status" />
                        </div>
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Required</h3>
                            <p>Required data within a form is an important consideration for any form. Understanding that specific
                                data is required, provides the user with a degree of guidance when completing a form
                                all required inputs should provide a prompt to the user of this requirement. 
                            </p>
                        </div>
                        <div>
                            <img src={required} alt="Required Input" />
                        </div>
                        
 
                    </div>
                </div>
                <div className="page-content">
                    <h2>Advanced Text Input</h2>
                    <p>An advanced input provides the user with additional support to assist in correctly defining the value. 
                        This can be a specific custom value or through usage of custom controls.</p>


                    <div className="article-section">
                        <h3>Lookups</h3>
                        <p>A lookup supports the ability to filter values based on provided data. In a number of instances 
                            lookups are used to filter records returned by an Api based on the value provided the possible 
                            options are filtered. Lookups can also support selection of multiple options if required. 
                            This should be a defined property with the lookup supporting multiple if required.</p>
                            <img src={lookup} alt="Lookup Input" />
                    </div>
                    <div className="article-section">
                        <h3>Date Pickers</h3>
                        <p>Allowing a user to select a date from an easy to use picker moves the user away from having to manually 
                            type a date value. Which can be a time consuming action. A date picker provides a visual way of selecting
                             a date or range of dates.</p>
                             <img src={datepicker} alt="Datepicker" />
                    </div>
                </div>
                <div className="page-content">
                    <h2>Selection Input</h2>
                    <p>A selection input is used where only the user is required to pick a pre defined value. Custom input is not 
                        supported so the user must select from the options provided. The number of options available should determine 
                        which control is to be used.</p>

                    <div className="info-section fifty-split">
                        <div>
                            <h3>Toggle</h3>
                            <p>A toggle is to be used in the most simple of cases where the user can select a positive or negative value / ’true’ or ‘false’. 
                            It use to be used as a singular so not appropriate where there is a number of true or false questions. In this instance 
                            radio buttons or checkboxes should be considered.</p>
                        </div>
                        <div>
                            <img src={toggle} alt="Toggle" />
                        </div>
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Checkbox</h3>
                            <p>The flexibility of the checkbox make it a good option for a wide range of use cases. It provides the user with the ability to 
                            select both single or multiple options when bound together in a group use case.</p>
                        </div>
                        <div>
                            <img src={checkbox} alt="Checkbox" />    
                        </div>  
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                        <h3>Radio Button</h3>
                        <p>Provided as an alternative to the toggle control a radio button allows the user to typically set a ’true’ or ‘false’ state. 
                            Its usage is generally wider ranging than the toggle control. The ability to group multiple radio buttons extends is usability 
                            beyond that of the toggle for broader use cases.</p>
                        </div>
                        <div>
                            <img src={radio} alt="Radio Button" />
                        </div>  
                    </div>
                    <div className="info-section fifty-split">
                        <div>
                            <h3>Dropdown</h3>
                            <p>The dropdown often referred to a select is a primary control to be found in forms. This flexible control allows the user to select 
                            an option from a list of potential options. An important consideration is the number of potential options being displayed with 
                            the lookup to be used where the potential options becomes excessive.</p>
                        </div>
                        <div>
                        <img src={select} alt="Select" />
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default DataEntry;