import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Access from '../../pages/Access';
import Edi from '../../pages/Edi';
import Main from '../../pages/Main';
import Order from '../../pages/Order';
import Report from '../../pages/Report';
import Upload from '../../pages/Upload';

const DefaultRoutes = () => (
    <>
        <Navbar />
        <Route exact path="/dashboard" component={Main} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/edi" component={Edi} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/access" component={Access} />
        <Redirect to="/notfound" />
    </>
);

export default DefaultRoutes;
