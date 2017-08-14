import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Wines from './Components/Wines/Wines';
import Events from './Components/Events/Events';
import Visit from './Components/Visit/Visit';

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/wines' component={Wines}/>
        <Route path='/events' component={Events}/>
        <Route path='/visit' component={Visit}/>                
    </Switch>
);