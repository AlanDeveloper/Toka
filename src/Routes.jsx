import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from './components/main/Home';
import Login from './components/main/Login';
import Register from './components/main/Register';
import Films from './components/main/Films';
import Series from './components/main/Series';
import Watch from './components/main/Watch';

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