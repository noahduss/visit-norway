import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home'
import Tours from "../pages/Tours";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Imprint from '../pages/Imprint'
import Contact from "../pages/Contact";

const Routes = () => {
    return (
        <Switch>
            <Route 
                path='/contact'
                component={Contact}
            />
            <Route 
                path='/imprint'
                component={Imprint}
            />
            <Route 
                path='/gallery'
                component={Gallery}
            />
            <Route 
                path='/about'
                component={About}
            />
            <Route 
                path='/tours'
                component={Tours}
            />
            <Route
                path="/"
                exa
                component={Home}
            />
            
            
        </Switch>
    )
}

export default Routes
