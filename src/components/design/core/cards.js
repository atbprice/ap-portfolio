import React from 'react';
import '../../styles/design/core-styles/cards.css';
import DesignNavi from '../design-navi';
import ExchangedIcon from '../../styles/assets/exchanged-icon.png';


const Cards = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Cards</h1>
                <p className="article-section">Content is to be displayed in cards, these are containers provided in the UI that groups relevant content together. <br />
                 The usage of a card can vary from a dashboard stat card to full page listing containers.</p>
            </div>
            <div className="page-content">
                <div className="card-block">
                <div>
                    <h4>Example Card</h4>
                    <div className="example-card small">
                        <div className="css-styling">
                            <b>CSS</b>
                            <p>
                            width: 300px;<br />
                            height:200px;<br />
                            background-color: #ffffff;<br />
                            border: 1px solid #eaeaea;<br />
                            box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.16);<br />
                            border-radius: 4px;
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Dashboard Card</h4>
                        <div className="example-card dashboard">
                        <div className="card-title">
                            <h3>Documents Exchanged</h3>
                        </div>
                        <div className="card-icon">
                            <img src={ExchangedIcon} alt="" />
                        </div>
                        <div className="card-value">
                            <span>1,566</span>
                        </div>
                           
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </div>
        </div>
        


    );
}

export default Cards;