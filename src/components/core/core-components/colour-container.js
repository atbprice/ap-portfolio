import React from 'react';

const ColourContainer = (props) => {
    return(
        <div className="color-container">
            <h4>{props.colourName}</h4>
            <div className={props.color}></div>
            <div className="color-text">
                <p>Hex: <span>{props.hex}</span></p> 
                <p>R G B: <span>{props.rgb}</span></p>
            </div>
        </div>
        
    );
}

export default ColourContainer;