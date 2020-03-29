import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/index'
import CadastroUser from './pages/Users/index';

export default function Routes() { 
    return (   
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/users" component={CadastroUser} />
            </Switch>
        </BrowserRouter>
    );
}