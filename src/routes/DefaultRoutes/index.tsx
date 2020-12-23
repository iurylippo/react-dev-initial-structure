import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Navbar, { withNavBar } from '../../components/Navbar';
import Main from '../../pages/Main';
import Access from '../../pages/Access';
import Edi from '../../pages/Edi';
import Order from '../../pages/Order';
import Report from '../../pages/Report';
import Upload from '../../pages/Upload';
import PrivateRoute from '../PrivateRoute';
import Notfound from '../../pages/Notfound';

const DefaultRoutes = () => (
    <div>
        <Route>
            <Route exact path="/order" component={withNavBar(Order)} />
            <Route exact path="/report" component={withNavBar(Report)} />
            <Route exact path="/edi" component={withNavBar(Edi)} />
            <Route exact path="/upload" component={withNavBar(Upload)} />
            <Route exact path="/access" component={withNavBar(Access)} />
            <Route component={PrivateRoute} />
        </Route>
    </div>
);

export default DefaultRoutes;
