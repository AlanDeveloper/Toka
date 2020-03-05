import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from './components/main/Home';
import Films from './components/main/Films';
import Series from './components/main/Series';
import Watch from './components/main/Watch';

export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/filmes" component={Films} />
        <Route path="/series" component={Series} />
        <Route path="/filmes/assistir:id" component={Watch} />
        <Redirect from="*" to="/" />
    </Switch>