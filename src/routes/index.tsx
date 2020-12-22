import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Access from '../pages/Access';
import Edi from '../pages/Edi';
import Main from '../pages/Main';
import Notfound from '../pages/Notfound';
import Order from '../pages/Order';
import Report from '../pages/Report';
import Signin from '../pages/Signin';
import Upload from '../pages/Upload/indext';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/dashboard" component={Main} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/report" component={Report} />
                <Route exact path="/edi" component={Edi} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/access" component={Access} />
                <Route path="*" component={Notfound} />
            </Switch>
        </Router>
    );
};

export default Routes;
