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
                    <Route path="/" exact component={home} />
 
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;