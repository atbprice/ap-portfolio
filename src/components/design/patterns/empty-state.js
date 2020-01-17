import React from 'react';
import DesignNavi from '../design-navi';

const EmptyState = () => {

    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Empty State</h1>
                    <p className="article-section">
                        
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default EmptyState;