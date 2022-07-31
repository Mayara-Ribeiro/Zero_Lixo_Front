import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
} 


export default Rotas;