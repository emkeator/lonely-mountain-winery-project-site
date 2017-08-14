import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Wines from './Components/Wines/Wines';
import Events from './Components/Events/Events';
import Visit from './Components/Visit/Visit';

export default (
    <Switch>
        <Route path='lonely-mountain-winery-project-site/' exact component={Home}/>
        <Route path='lonely-mountain-winery-project-site/wines' component={Wines}/>
        <Route path='lonely-mountain-winery-project-site/events' component={Events}/>
        <Route path='lonely-mountain-winery-project-site/visit' component={Visit}/>                
    </Switch>
);
