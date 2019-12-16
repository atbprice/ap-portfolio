import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Colours from './core/colours';
import Cards from './core/cards';
import Typography from './core/typography';
import Iconography from './core/iconography';
import dsLanding from './ds-landing';
import Avatars from './elements/avatars';
import Banners from './elements/banners';
import Breadcrumbs from './elements/breadcrumbs';
import Buttons from './elements/buttons';
import DataList from './elements/data-list';
import Dropdowns from './elements/dropdowns';
import TextField from './elements/text-field';
import Notifications from './elements/notifications';
import Toggles from './elements/toggles';
import Header from './header';


import BrandMain from './brand/brand-main';
import DesignMain from './design/design-main';
import DevMain from './dev/dev-main';
import './core.css';
import ToolTips from './elements/tooltips';



const App = () => {
    return(
        <div className="base-div">
            <BrowserRouter>
                <div className="content-container">
                    <Header />
                        {/* <Navigation /> */}
                
                    <div className="main-section">

                        <Route path="/" exact component={dsLanding} />
                        <Route path="/brand/brand-main" exact component={BrandMain} />
                        <Route path="/design/design-main" exact component={DesignMain} />
                        <Route path="/dev/dev-main" exact component={DevMain} />

                        <Route path="/core/colours" exact component={Colours} />
                        <Route path="/core/typeface" exact component={Typography} />
                        <Route path="/core/icons" exact component={Iconography} />
                        <Route path="/core/cards" exact component={Cards} />

                        <Route path="/elements/avatars" exact component={Avatars} />
                        <Route path="/elements/banners" exact component={Banners} />
                        <Route path="/elements/breadcrumbs" exact component={Breadcrumbs} />
                        <Route path="/elements/buttons" exact component={Buttons} />
                        <Route path="/elements/data-list" exact component={DataList} />
                        <Route path="/elements/dropdowns" exact component={Dropdowns} />
                        <Route path="/elements/text-field" exact component={TextField} />
                        <Route path="/elements/notifications" exact component={Notifications} />
                        <Route path="/elements/toggles" exact component={Toggles} />
                        <Route path="/elements/tooltips" exact component={ToolTips} />
                    </div>
                    
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;