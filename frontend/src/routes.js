import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logar/index'
import CadastroColaborador from './pages/Colaborador/index';
import Principal from './pages/Principal/index';
import CadastroOrcamento from './pages/Orcamento/index';

export default function Routes() { 
    return (   
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/colaborador/novo" component={CadastroColaborador} />
                <Route path="/principal" component={Principal} />
                <Route path="/orcamento/novo" component={CadastroOrcamento} />
            </Switch>
        </BrowserRouter>
    );
}