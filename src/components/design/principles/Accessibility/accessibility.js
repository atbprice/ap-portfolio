import React from 'react';
import DesignNavi from '../../navi/design-navi';

const Accessibility = () => {
    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
            <div className="page-heading">
                <h1>Accessibility</h1>
                <p className="article-section">
                    Providing accessible products to users with impairments is a primary objective for our applications. 
                    Designing with accessibility in mind allows users of all abilities to become productive using our products.
                </p>
            </div>
                <div className="page-content">
                  <h2>Structure</h2>
                  <p className="article-section">
                      Providing a consistent, well defined clear structure & hierarchy helps users in becoming familiar with our applications.
                      Headings (inc sub headings) should be used to provide structure to the page, allowing the user to visually identify related sections.
                  </p>
                </div>
                <div className="page-content">
                  <h2>Page Hierarchy</h2>
                  <p className="article-section">
                      
                  </p>
                </div>
                
            </div>
        </div>
    )
}

export default Accessibility;