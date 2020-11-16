import React from 'react';
import Header from './header';

const AboutMe = () => {
    return (
        <div className="home-content">
            <Header />
              <div className="overview-container intro dark">
                <div className="text-padding">
                <div className="title-box">
                    
                    <h2 className="banner-sub">About Me</h2>
                </div>
                <p>
                    Hi, I am a product design leader and tech enthusiast based in rural Nottinghamshire.
                    </p>
                    <p>
                    I began my journey as a developer, before migrating to user experience. I wanted to understand, 
                    how the products I was developing were being used, and who was using them. That curiosity led me to the field of UX, and has stayed with me ever since.
                    </p>
                    
                    <p>
                    My passion for UX has allowed me tackle a wide range of design projects and nurture design teams, whilst embedding alignment with Product & Development functions. 
                    </p>

                </div>
               
                    
                
            </div>
        </div>
    )
}

export default AboutMe;