import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logar/index'
import CadastroColaborador from './pages/Colaborador/index';

export default function Routes() { 
    return (   
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/users" component={CadastroColaborador} />
            </Switch>
        </BrowserRouter>
    );
}