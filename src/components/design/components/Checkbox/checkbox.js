import React from 'react';
import DesignNavi from '../../navi/design-navi';

const Checkbox = () => {

    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Checkbox</h1>
                    <p className="article-section">
                    A checkbox is provided as an alternative for the toggle control, the checkbox is to be used when
                     the toggle isn’t appropriate & there are multiple positive / negative’s to be set.
                    An example being the data grid.
                    </p>
                </div> 
            </div>
        </div>
    );
}

export default Checkbox;