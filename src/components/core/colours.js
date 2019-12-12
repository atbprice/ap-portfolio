import React from 'react';
import '../styles/core-styles/colours.css';
import ColourContainer from './core-components/colour-container';
import DesignNavi from '../design/design-navi';


const Colours = () => {
    return(
        <div className="grid-display">
            <DesignNavi />
        <div className="primary-container">
            <div className="page-heading">
                <h1>Colours</h1>
                <p>The colours to be used within all of our applications are provided here.</p>
            </div>
            <div className="page-content color-page">
                <h2>Primary Colours</h2>
                <div className="color-row">
                    <ColourContainer colourName="Dark Grey" color="color-block dark-grey" hex="#3c3c3b" rgb="60 60 59" />
                    <ColourContainer colourName="Dark Purple" color="color-block dark-purple" hex="#211554" rgb="31 21 84" />
                    <ColourContainer colourName="Violet" color="color-block violet" hex="#8A63FC" rgb="138 99 252" />
                </div>
                <h2>Secondary Colours</h2>
                <div className="color-row">
                    <ColourContainer colourName="Sky" color="color-block sky" hex="#15BDDE" rgb="21 189 222" />
                    <ColourContainer colourName="Mint" color="color-block mint" hex="#51DEB7" rgb="81 222 183" />
                    <ColourContainer colourName="Light Grey" color="color-block light-grey" hex="#C6C6C6" rgb="198 198 198" />
                </div>

                <h2>Extended</h2>
                <div className="color-row">
                    <ColourContainer colourName="Dusty Pink" color="color-block dusty-pink" hex="#DA6A84" rgb="218 106 132" />
                    <ColourContainer colourName="Mustard" color="color-block mustard" hex="#E3AB2A" rgb="227 171 42" />
                    <ColourContainer colourName="Lilac" color="color-block lilac" hex="#969ACC" rgb="150 154 204" />

                </div>
                <h2>Success / Failure</h2>
                <div className="color-row">
                    <ColourContainer colourName="Dark Green" color="color-block success-green" hex="#3EAB8C" rgb="62 171 140" />
                    <ColourContainer colourName="Failure - Red" color="color-block failure-red" hex="#DB2D43" rgb="227 171 42" />
                </div>
                    
                <h2>Greys</h2>
                <div className="color-row">
                    <ColourContainer colourName="Input border - Grey" color="color-block input-border-grey" hex="#D6D6D6" rgb="214 214 214" />
                    <ColourContainer colourName="Dark Shade Grey" color="color-block dark-shade-grey" hex="#D1D1D1" rgb="214 214 214" />
                </div> 
            </div>
            
        </div>
        </div>
    );
}

export default Colours;