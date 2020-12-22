import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from '../routes';
import '../styles/sass/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import store from '../store';

const App = () => (
    <Provider store={store}>
        <Routes />
        <ToastContainer />
    </Provider>
);

export default App;
