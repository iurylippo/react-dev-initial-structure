import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { withNavBar } from '../../components/Navbar';
import Main from '../../pages/Main';
import { StoreState } from '../../store/createStore';

const PrivateRoute = () => {
    // const { isSignin } = useSelector((state: StoreState) => state.auth);
    const isSignin = true;

    return isSignin ? <Route exact path="/dashboard" component={withNavBar(Main)} /> : <Redirect to="/" />;
};

export default PrivateRoute;
