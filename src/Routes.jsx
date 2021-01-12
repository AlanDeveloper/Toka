import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from './components/Main/Home';
import Films from './components/Main/Films';
import Series from './components/Main/Series';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import Watch from './components/Main/Watch';

export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/series" component={Series} />
        <Route path="/filmes" component={Films} />
        <Route path="/assistir" component={Watch} />
        <Redirect from="*" to="/" />
    </Switch>