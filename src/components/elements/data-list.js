import React from 'react';
import DesignNavi from '../design/design-navi';
import '../styles/element-styles/data-list.css';

const DataList = () => {
    return (
            <div className="grid-display">
                <DesignNavi />
                <div className="primary-container">
                    <div className="page-heading">
                        <h1>Data List</h1>
                        <p className="article-section">Displaying data is a critical piece of digital solutions, Supporting a variety of potential requirements is an important aspect of this system.</p>
                    </div>
                    <div className="page-content">
                        <h2>Card Listing</h2>
                        <p className="article-section">The card list option is used for displaying a rigid list of information e.g. users or customer information. The ability to have full control 
                            over the layout of the data provides a high level of customisability & improves usability.
                            This option may not be suitable where a large number of properties are available & the requirement to adjust which columns are being displayed is required.</p>
                                <div className="data-list">
                                    <div class="row">
                                        <div className="avatar">   
                                        </div>
                                        <div className="title">
                                            <h3>Ian Wilkinson</h3>
                                        </div>
                                        <div className="email">
                                            ian.wilkinson@datainterchange.com
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="avatar">   
                                        </div>
                                        <div className="title">
                                            <h3>Ian Wilkinson</h3>
                                        </div>
                                        <div className="email">
                                            ian.wilkinson@datainterchange.com
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="page-content">
                        <h2>Data Table</h2>
                        <p className="article-section">A data table is used to display content in a structured format. It has a rigid columnar approach that provides structure to data visibility.</p>
                        <div className="data-list">
                            <div className="table-header">
                                <div>First Name</div>
                                <div>Last Name</div>
                                <div>Role</div>
                                <div>Date Created</div>
                            </div>
                            <div className="table-row">
                                <div>Ian</div>
                                <div>Johnson</div>
                                <div>System Administrator</div>
                                <div>19/11/2019</div>
                            </div>
                            <div className="table-row">
                                <div>Ian</div>
                                <div>Johnson</div>
                                <div>System Administrator</div>
                                <div>19/11/2019</div>
                            </div>
                            <div className="table-row">
                                <div>Ian</div>
                                <div>Johnson</div>
                                <div>System Administrator</div>
                                <div>19/11/2019</div>
                            </div>
                        </div>
                    </div>
                </div>

        
            </div>
        )
}

export default DataList;