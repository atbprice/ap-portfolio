import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Colours from './design/core/colours';
import Cards from './design/core/cards';
import Typography from './design/core/typography';
import Iconography from './design/core/iconography';
import dsLanding from './ds-landing';
import Avatars from './design/elements/avatars';
import Banners from './design/elements/banners';
import Breadcrumbs from './design/elements/breadcrumbs';
import Buttons from './design/elements/buttons';
import DataList from './design/elements/data-list';
import Dropdowns from './design/elements/dropdowns';
import TextField from './design/elements/text-field';
import Notifications from './design/elements/notifications';
import Toggles from './design/elements/toggles';
import Header from './header';


import BrandMain from './brand/brand-main';
import DesignMain from './design/design-main';
import DevMain from './dev/dev-main';
import './core.css';
import ToolTips from './design/elements/tooltips';
import ButtonComponent from './dev/button-component';



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

                        <Route path="/dev/button-component" exact component={ButtonComponent} />
                    </div>
                    
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;