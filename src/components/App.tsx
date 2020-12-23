import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from '../routes';
import '../styles/sass/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import store from '../store';
import history from '../services/history';

const App = () => (
    <Router history={history}>
        <Provider store={store}>
            <Routes />
            <ToastContainer />
        </Provider>
    </Router>
);

export default App;
