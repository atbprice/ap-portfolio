import React from 'react';
import './tile-list.css';
import DesignNavi from '../../navi/design-navi';
import exampleTile from '../../../styles/assets/example-tile-list.png';
import deleteTile from '../../../styles/assets/delete-tile-list.png';

const TileList = () => {

    return(
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Tile List</h1>
                    <p className="article-section">
                        The card list option is used for displaying a rigid list of information e.g. users or customer
                         information. The ability to have full control over the layout of the data provides a high 
                         level of customisability & improves usability. This option may not be suitable where a large 
                         number of properties are available & the requirement to adjust which columns are being 
                         displayed is required. 
                    </p>
                </div> 
                <div className="page-content">
                    <div className="article-section">
                        <img className="tile-example" src={exampleTile} alt="Example Tile" />
                    </div>
                    <div className="article-section">
                        <h2>Delete Tile</h2>
                        <img className="tile-example" src={deleteTile} alt="Delete Tile" />
                        
                    </div>
                       
                </div>
            </div>
        </div>
    );
}

export default TileList;