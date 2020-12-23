import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withNavBar } from '../components/Navbar';
import Access from '../pages/Access';
import Edi from '../pages/Edi';
import Main from '../pages/Main';
import Notfound from '../pages/Notfound';
import Order from '../pages/Order';
import Report from '../pages/Report';

import Signin from '../pages/Signin';
import Upload from '../pages/Upload';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/order" component={withNavBar(Order)} />
                <Route exact path="/report" component={withNavBar(Report)} />
                <Route exact path="/edi" component={withNavBar(Edi)} />
                <Route exact path="/upload" component={withNavBar(Upload)} />
                <Route exact path="/access" component={withNavBar(Access)} />
                <Route exact path="/dashboard" component={withNavBar(Main)} />
                <Route path="/404" component={Notfound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
};

export default Routes;
