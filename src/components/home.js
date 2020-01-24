import React from 'react';
import './styles/home.css'
import combined from './styles/assets/combined.png';
import ReactImage from './styles/assets/react.png';
import Consistency from './styles/assets/Consistency.png';
import Simplicity from './styles/assets/Simplicity.png';
import Delightful from './styles/assets/Delightful.png';


const home = () => {
    return(
        <div>
            <div className="main-content">
                <div className="hero-image">
                    <img src={combined} alt="hero" />
                </div>
                <div className="title-text">
                    <h1>Butterscotch</h1>
                    <h2>Consistency</h2>
                    {/* <p className="">
                        Delivering a consistent high quality to all outputs across
                        both design & development.
                    </p> */}
                    <h2>Simplicity</h2>
                    {/* <p className="">
                        Making the complex simple for designers, developers & users. 
                    </p> */}
                    <h2>Delightful</h2>
                    {/* <p className="">
                        Providing enjoyable, easy to use experiences for our customers.
                        
                    </p> */}
                </div>
                
            </div>
            
            <div className="values-container">
                <div className="container">
                   <h2>Consistency</h2>
                    <div className="image"> <img src={Consistency} alt="hero" /> </div>
                    <div className="text">Delivering high quality outputs across both design & development.</div>
                </div>
                <div className="container">
                    <h2>Simplicity</h2>
                    <div className="image"> <img src={Simplicity} alt="hero" /></div>
                    <div className="text">Making the complex simple for designers, developers & users. </div>
                </div>
                <div className="container">
                    <h2>Delightful</h2>
                    <div className="image"> <img src={Delightful} alt="hero" /></div>
                    <div className="text">Providing clear, concise, easy to use solutions.</div>
                </div>
               
               
            </div>
            {/* <div className="detail-container">
                <div className="content">
                <h2>Overview</h2>
                <p className="central-text">
                    This hub details all the tools and resources needed for
                    understanding, designing & developing delightful experiences that
                    align with the Data Interchange brand.  
                </p>

                </div>
               
               
            </div> */}
            <div className="react-container">
                <div className="content">
                    <h2>React</h2>
                    <p className="central-text">
                        Our component library has been developed using React.     
                    </p>
                </div>
                <div className="image">
                    <img src={ReactImage} alt="React" />
                </div>

            </div>
                {/* <span className="react-questions">
                    <p>Following our Design System, we have developed a React component library. This contains a growing list of high quality components for building high quality experiences.</p>
                </span>
                <div className="company-react">
                    <span><img className="di-logo" src={DIlogo} alt="" /></span>
                    <span>+</span>
                    <span><img src={ReactImage} alt="" /></span>
                </div>
                <div className="react-context">
                    <span className="include-tag"><h4>{"@data-interchange/{component-name}"}</h4></span>
                </div> */}
         </div>


        
    );
}

export default home;