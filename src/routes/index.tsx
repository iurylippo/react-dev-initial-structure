import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from '../pages/Notfound';

import Signin from '../pages/Signin';
import DefaultRoutes from './DefaultRoutes';

// const NotFoundRedirect = () => <Redirect to="/notfound" />;

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path="/notfound" component={Notfound} />
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route component={DefaultRoutes} />
                </Switch>
            </Router>
        </>
    );
};

export default Routes;
