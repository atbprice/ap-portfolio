import React from 'react';
import DesignNavi from '../../navi/design-navi';
import './breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Breadcrumbs</h1>
                <p className="article-section">Breadcrumbs are used to asssit the user in identifying their location within the application or website.
                By using the page hierarchy, breadcrumbs are easily understood by users.
                </p>
                <p className="article-section">A breadcrumb is not to be used in place of a visible navigation structure. Their purpose is to provide 
                    feedback on the hierarchical progress through an application from top to bottom levels.
                </p>
            </div>
            <div className="page-content">
                <div className="breadcrumb-example">
                <div className="breadcrumb">Customers / Add Customer</div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Breadcrumbs;