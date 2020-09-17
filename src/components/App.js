import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './core.css';
import home from './home';


import Header from './header';


import ProcessMain from './process/process-main';
import ProjectsMain from './projects/projects-main';




const App = () => {
    return(
        <div className="">
            <BrowserRouter>
                <div className="content-container">
                    <Header />
                       
                    <div className="main-section">
                        <Route path="/" exact component={home} />
                        <Route path="/process/process-main" exact component={ProcessMain} />
                        <Route path="/projects/projects-main" exact component={ProjectsMain} />
                    </div>    
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;