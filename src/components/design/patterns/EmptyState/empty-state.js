import React from 'react';
import DesignNavi from '../../navi/design-navi';

const EmptyState = () => {

    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Empty State</h1>
                    <div className="article-section">
                        <p>
                            Providing feedback when either an error has occurred or there are no records present 
                            is referred to as empty state. This state can provide the user with prompts for 
                            adding records or feedback on search criteria.
                        </p>
                        <p>
                            The level of detail provided by this feedback is an important consideration to ensure 
                            the user feels engaged & not that an error has occurred or not catered for.
                        </p>
                    </div>
                </div> 
                <div className="page-content">
                    <div className="article-section">
                        <h3>Usage</h3>
                        <p>
                        An empty state is a catch step to make sure the user is communicated to effectively. 
                        Its goal should be to inform the user what has happened, why they are seeing the error & 
                        what they can do about it. An important consideration here is to make sure the user doesn’t 
                        see this as an error & is provided with methods of moving forwards. Examples being a new feature 
                        onboarding process.
                        </p>
                    </div>
                    <div className="article-section">
                        <h2>Properties</h2>
                        <p>
                            To ensure consistency all empty state messaging should provide 3 main properties, message, 
                            A call to action & supporting content.
                        </p>
                    </div>
                    <div className="article-section">
                        <h3>Message</h3>
                        <p>
                            The messaging is a crucial part of the empty state, clarifying to the user the status & reasoning 
                            for the empty state being displayed.
                        </p>
                    </div>
                    <div className="article-section">
                        <h3>Call to Action</h3>
                        <p>
                            Providing a call to action helps the user to move forwards, the importance here being to provide that way 
                            forwards as opposed to the user needing to use browser back buttons.
                        </p>
                    </div>
                    <div className="article-section">
                        <h3>Supporting Content</h3>
                        <p>
                            The more flexible of the 3 properties is the supporting content aspect. This is provided to engage the user, 
                            whether that’s through imagery, supporting information or example content its important to provide engaging 
                            messaging to the user.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyState;