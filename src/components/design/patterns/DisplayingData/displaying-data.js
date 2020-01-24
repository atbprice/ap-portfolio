import React from 'react';
import DesignNavi from '../../navi/design-navi';
import './displaying-data.css';
import DataTable from '../../../styles/assets/data-table.png';
import TileList from '../../../styles/assets/tile-list.png';


const DisplayingData = () => {

    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Displaying Data</h1>
                    <p className="article-section">
                    Providing data for the user to view is a fundamental part of any application. 
                    There are a wide variety of methods to display data from DataGrids to card. 
                    Selecting the correct method is based on the use case & should be selected where 
                    possible from existing formats.
                    </p>
                </div> 
                <div className="page-content ">
                    <div className="article-section">
                        <h3>Data Grid / Table</h3>
                        <p>
                        A well established method of displaying data is through a data grid or table. 
                        This method has become the go to approach for displaying a large number of records. 
                        Tables allow you to define columns of information & provide additional functionality 
                        e.g. filtering, sorting.
                        </p>
                        <p>
                        A limitation on the Data Grid is within a responsive application where mobile support is 
                        required. A DataGrid will only scale down to a width dependant on the content. Alternative 
                        methods should be considered where mobile support is required.
                        </p>
                        <div>
                            <img className="data-table" src={DataTable} alt="Data Table" />
                        </div>

                    </div>
                    <div className="article-section">
                        <h3>Tile</h3>
                        <p>
                            As responsive design principles have become a standard approach towards delivering high 
                            quality web applications the tile list view has grown in popularity. It is a flexible 
                            approach that can be used for a wide range of requirements. It doesn’t have the rigid 
                            columnar approach seen in a dataGrid but provides more flexibility to a  user especially 
                            when moving between devices. 
                        </p>
                        <div>
                            <img className="tile" src={TileList} alt="Tile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayingData;