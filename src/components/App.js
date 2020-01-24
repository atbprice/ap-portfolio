import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './core.css';
import home from './home';

import Colours from './design/visual/Colour/colours';
import Cards from './design/patterns/Card/cards';
import Typography from './design/visual/Typography/typography';
import Iconography from './design/visual/Iconography/iconography';

import Avatars from './design/components/Avatars/avatars';
import Banners from './design/components/Banners/banners';
import Breadcrumbs from './design/components/Breadcrumb/breadcrumbs';
import Buttons from './design/components/Button/buttons';
import DataList from './design/components/DataList/data-list';
import Dropdowns from './design/components/Dropdown/dropdowns';
import TextField from './design/components/TextField/text-field';
import Toast from './design/components/Toast/toast';
import Toggles from './design/components/Toggle/toggles';
import Header from './header';
import Usability from './design/principles/Usability/usability';
import Accessibility from './design/principles/Accessibility/accessibility';
import Panel from './design/patterns/Panel/panel';
import Forms from './design/patterns/Forms/forms';
import BrandMain from './brand/brand-main';
import DesignMain from './design/design-main';
import DevMain from './dev/dev-main';

import ToolTips from './design/components/Tooltip/tooltips';
import ButtonComponent from './dev/button-component';
import Responsive from './design/principles/Responsive/responsive';
import DataEntry from './design/patterns/DataEntry/data-entry';
import DisplayingData from './design/patterns/DisplayingData/displaying-data';
import EmptyState from './design/patterns/EmptyState/empty-state';
import Loading from './design/patterns/Loading/loading';
import TileList from './design/components/TileList/tile-list';
import Checkbox from './design/components/Checkbox/checkbox';
import RadioButton from './design/components/radio';



const App = () => {
    return(
        <div className="base-div">
            <BrowserRouter>
                <div className="content-container">
                    <Header />
                        {/* <Navigation /> */}
                
                    <div className="main-section">

                        <Route path="/" exact component={home} />

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
                        <Route path="/core/panel" exact component={Panel} />
                        <Route path="/core/forms" exact component={Forms} />

                        <Route path="/components/avatars" exact component={Avatars} />
                        <Route path="/components/banners" exact component={Banners} />
                        <Route path="/components/breadcrumbs" exact component={Breadcrumbs} />
                        <Route path="/components/buttons" exact component={Buttons} />
                        <Route path="/components/data-list" exact component={DataList} />
                        <Route path="/components/dropdowns" exact component={Dropdowns} />
                        <Route path="/components/text-field" exact component={TextField} />
                        <Route path="/components/toast" exact component={Toast} />
                        <Route path="/components/toggles" exact component={Toggles} />
                        <Route path="/components/tooltips" exact component={ToolTips} />
                        <Route path="/components/tile-list" exact component={TileList} />
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