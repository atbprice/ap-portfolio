import React from 'react';
import DesignNavi from '../design-navi';

const Usability = () => {
    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
            <div className="page-heading">
                <h1>Usability</h1>
                <p className="article-section">
                    Usability refers to how easily a product or website is to access and/ or use. Delivering a solution to the user
                    that allows them to carry out their required tasks, is easy to learn & provides feedback are the primary goals for achieving good usability.
                </p>
            </div>
                <div className="page-content">
                   <p className="article-section">
                     All experiences designing are required to ahere to the below tenants:
                   </p>
                   <p>
                     A usable interface should deliver 3 main outcomes:
                   </p>
                   <p>
                     The focus being to be to provide the user with a familiar experience they quickly become
                     comfortable with, allowing them to become self sufficient within a short time period. 
                     Embracing existing mental models from well known applications reduces the learning curve
                     of a new application to a user.
                   </p>
                   <p>
                     Assisting the user in becoming productive within a short time period, by providing them
                     with the capability of achieving their objective in a simple manner.
                   </p>
                   <p>
                     Delivering a consistent experience allows the user to complete tasks promptly not just
                    during their initial but during subsequent visits also. A good design guides the user
                     through new features / functions & provides familiarity to the user.
                   </p>
                </div>
            </div>
        </div>
    )
}

export default Usability;