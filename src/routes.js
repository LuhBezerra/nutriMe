import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './pages/CategoriesList';
//switch garante que uma rota seja executada a cada momento 

import Landing from "./pages/Landing";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> 
            <Route path="/categories" exact component={Categories} /> 
        </BrowserRouter>
    )
}