import React from 'react';
import '../styles/element-styles/text-fields.css';
import InputExample from '../styles/assets/input-example.png'

const TextField = () => {
    return (

<div className="primary-container">
            <div className="page-heading">
                <h1>Text Fields</h1>
                <p>Text fields are to be used within forms to help people enter, select, and search for text. Text fields are normally found within a form but can also be part of a modal, 
                search, or card.</p>
            </div>
            <div className="page-content">
            <div className="example">
                <img src={InputExample} alt="input example" />
            </div>
             {/*Example Sizes */}
             <h3>Standard Input</h3>
            <p>Buttons are to be consumed within a multitude of different scenario’s. The stan</p>
                
            </div>
        </div>

    )
}

export default TextField;