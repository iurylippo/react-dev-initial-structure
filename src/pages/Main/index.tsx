import React from 'react';
import Iframe from 'react-iframe';
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
            <Iframe
                width="100%"
                height="1000px"
                url="https://datastudio.google.com/embed/reporting/23ad7fc0-b4c2-4459-a3b3-85b5ca1f19da/page/1M"
                allowFullScreen
                frameBorder={0}
            />
        </Container>
    );
};

export default Main;
