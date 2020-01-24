import React from 'react';
import DesignNavi from '../../navi/design-navi';

const Forms = () => {
    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Forms</h1>
                    <p className="article-section">
                        A form allows users to input data, select options, or alter information within an application. 
                        Delivering a consistent approach to form layouts requires a number of key decisions to be made around how forms are displayed & how the user interacts with them.
                    </p>
                    <p className="article-section">
                        <h2>Form Components</h2>
                        <p>Common form components include, inputs, checkboxes, toggles, radio buttons, dropdowns, date pickers & buttons. Forms are also required  to include heading &  supporting text, this is used to provide context to the user to allow them to correctly deliver the required information.</p>
                        <b>[form component examples]</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Forms;