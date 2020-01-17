import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Colours from './design/visual/colours';
import Cards from './design/patterns/cards';
import Typography from './design/visual/typography';
import Iconography from './design/visual/iconography';
import dsLanding from './ds-landing';
import Avatars from './design/components/avatars';
import Banners from './design/components/banners';
import Breadcrumbs from './design/components/breadcrumbs';
import Buttons from './design/components/buttons';
import DataList from './design/components/data-list';
import Dropdowns from './design/components/dropdowns';
import TextField from './design/components/text-field';
import Notifications from './design/components/notifications';
import Toggles from './design/components/toggles';
import Header from './header';
import Usability from './design/principles/usability';
import Accessibility from './design/principles/accessibility';
import Panels from './design/patterns/panels';
import Forms from './design/patterns/forms';
import BrandMain from './brand/brand-main';
import DesignMain from './design/design-main';
import DevMain from './dev/dev-main';
import './core.css';
import ToolTips from './design/components/tooltips';
import ButtonComponent from './dev/button-component';
import Responsive from './design/principles/responsive';
import DataEntry from './design/patterns/data-entry';
import DisplayingData from './design/patterns/displaying-data';
import EmptyState from './design/patterns/empty-state';
import Loading from './design/patterns/loading';
import CardList from './design/components/card-list';
import Checkbox from './design/components/checkbox';
import RadioButton from './design/components/radio';



const App = () => {
    return(
        <div className="base-div">
            <BrowserRouter>
                <div className="content-container">
                    <Header />
                        {/* <Navigation /> */}
                
                    <div className="main-section">

                        <Route path="/" exact component={dsLanding} />

                        <Route path="/patterns/data-entry" exact component={DataEntry} />
                        <Route path="/patterns/displaying-data" exact component={DisplayingData} />
                        <Route path="/patterns/empty-state" exact component={EmptyState} />
                        <Route path="/patterns/loading" exact component={Loading} />


                        <Route path="/brand/brand-main" exact component={BrandMain} />
                        <Route path="/design/design-main" exact component={DesignMain} />
                        <Route path="/dev/dev-main" exact component={DevMain} />

                        <Route path="/core/colours" exact component={Colours} />
                        <Route path="/core/typeface" exact component={Typography} />
                        <Route path="/core/icons" exact component={Iconography} />
                        <Route path="/core/cards" exact component={Cards} />
                        <Route path="/core/usability" exact component={Usability} />
                        <Route path="/core/accessibility" exact component={Accessibility} />
                        <Route path="/core/responsive" exact component={Responsive} />
                        <Route path="/core/panels" exact component={Panels} />
                        <Route path="/core/forms" exact component={Forms} />

                        <Route path="/components/avatars" exact component={Avatars} />
                        <Route path="/components/banners" exact component={Banners} />
                        <Route path="/components/breadcrumbs" exact component={Breadcrumbs} />
                        <Route path="/components/buttons" exact component={Buttons} />
                        <Route path="/components/data-list" exact component={DataList} />
                        <Route path="/components/dropdowns" exact component={Dropdowns} />
                        <Route path="/components/text-field" exact component={TextField} />
                        <Route path="/components/notifications" exact component={Notifications} />
                        <Route path="/components/toggles" exact component={Toggles} />
                        <Route path="/components/tooltips" exact component={ToolTips} />
                        <Route path="/components/card-list" exact component={CardList} />
                        <Route path="/components/checkbox" exact component={Checkbox} />
                        <Route path="/components/radio" exact component={RadioButton} />

                        <Route path="/dev/button-component" exact component={ButtonComponent} />
                        
                        

                    </div>
                    
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;