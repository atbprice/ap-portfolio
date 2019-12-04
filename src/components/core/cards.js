import React from 'react';
import '../styles/core-styles/cards.css';

const Cards = () => {
    return (
        <div className="primary-container">
            <div className="page-heading">
                <h1>Cards</h1>
                <p>Content is to be displayed in cards, these are containers provided in the UI that groups relevant content together. <br />
                 The usage of a card can vary from a dashboard stat card to full page listing containers.</p>
            </div>
            <div className="page-content">
                <div className="card-block">
                <h4>Dashboard Card</h4>
                <div className="example-card small">
                    <div className="css-styling">
                        <b>CSS</b>
                        <p>
                        width: 200px;<br />
                        height:200px;<br />
                        background-color: #ffffff;<br />
                        border: 1px solid #eaeaea;<br />
                        box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.16);<br />
                        border-radius: 4px;
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>


    );
}

export default Cards;