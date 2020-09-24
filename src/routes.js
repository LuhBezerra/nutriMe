import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from "./pages/Landing";
import About from './pages/About'
import Categories from './pages/CategoriesList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} /> 
                <Route path="/about" exact component={About} /> 
                <Route path="/categories" exact component={Categories} /> 
            </Switch>
        </BrowserRouter>
    )
}