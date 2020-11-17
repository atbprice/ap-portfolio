import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './core.css';
import './responsive.css'
import home from './home';
import me from './aboutme.js';

import ProjectsMain from './projects/projects-main';
import ProjectsUno from './projects/projects-uno';
import ProjectsFileandDocument from './projects/projects-filedoc';
import ProjectsPayPlan from './projects/projects-payplan';
import ProjectsNeyber from './projects/projects-neyber';
import ProjectsEYC from './projects/projects-eyc';




const App = () => {
    return(
        <div className="core-style">
            <BrowserRouter basename={window.location.pathname || ''}>
           
                <div className="content-container">
                    <Route path="/" exact component={home} />
                    <Route path="/aboutme" exact component={me} />
                    <Route path="/projects/uno" exact component={ProjectsUno} />
                    <Route path="/projects/fileanddocument" exact component={ProjectsFileandDocument} />

                   
                    <Route path="/projects" exact component={ProjectsMain} />
                    <Route path="/projects/payplan" exact component={ProjectsPayPlan} />
                    <Route path="/projects/neyber" exact component={ProjectsNeyber} />
                    <Route path="/projects/eyc" exact component={ProjectsEYC} />
                    
 
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;