import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from '../pages/Notfound';
import Signin from '../pages/Signin';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="*" component={Notfound} />
        </Switch>
    </Router>
);

export default Routes;
