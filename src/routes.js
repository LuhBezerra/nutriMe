import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './pages/CategoriesList';

import Landing from "./pages/Landing";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> 
            <Route path="/categories" exact component={Categories} /> 
        </BrowserRouter>
    )
}