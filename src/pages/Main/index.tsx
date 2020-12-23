import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { StoreState } from '../../store/createStore';

const Main = () => {
    const { isSignin } = useSelector((state: StoreState) => state.auth);
    // const isSignin = true;

    if (!isSignin) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <h1>Dashboard</h1>
        </Container>
    );
};

export default Main;
