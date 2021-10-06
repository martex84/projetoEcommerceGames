import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './view/pages/home';
import Carrinho from './view/pages/carrinho';


export default function Rota() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route exact component={Carrinho} path="/carrinho" />
            </Switch>
        </BrowserRouter>
    );
}