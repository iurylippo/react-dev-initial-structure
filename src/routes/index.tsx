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
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route component={DefaultRoutes} />
                    <Route exact path="/notfound" component={Notfound} />
                </Switch>
            </Router>
        </>
    );
};

export default Routes;
