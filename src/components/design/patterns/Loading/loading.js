import React from 'react';
import DesignNavi from '../../navi/design-navi';

const Loading = () => {

    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Loading</h1>
                    <p className="article-section">
                    A loading indicator is an important part of providing feedback to a user, this informs 
                    the user that something is happening. Ideally loading indicators would be required rarely
                     but are heavily dependant on APi performance, so a well established approach is important.
                    </p>
                </div> 
                <div className="page-content">
                    <div className="article-section">
                        <h2>Spinner</h2>
                        <p>
                        The spinner is generally an animated gif or svg that clearly represents a process is taking
                         place behind the UI. This approach is consistently used across web applications & utilises
                          established user mental models.
                        </p>
                    </div>
                    <div className="article-section">
                        <h2>Progress Bar</h2>
                        <p>
                        A variation on a spinner the progress bar is a more subtle loading indictor usually placed at the
                         top of the UI. This represents the progress of a process toward completion. Upon the progress 
                         reaching 100% the related UI is fully loaded.
                        </p>
                    </div>
                    <div className="article-section">
                        <h2>Content specific</h2>
                        <p>
                        Loading indicators should be used where processing is causing a delay in the availability of the 
                        information to populate the UI. Page load should not be affected & should be presented promptly with 
                        content loading when available. Complexity on the usage of loading indicators should be identified 
                        on a case by case basis.
                        </p>
                    </div>
                    <div className="article-section">
                        <h2>Stencils</h2>
                        <p>
                        A more advanced approach to loading data into a UI is by providing a set of stencils to be embedded & 
                        displayed as part of the loading process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;