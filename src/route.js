import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './App';
import novoJogo from './pages/novoJogo';

function Routes() {
    
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/novoJogo' component={novoJogo}/>
        </Switch>
        </BrowserRouter>
    )
    
}
export default Routes;