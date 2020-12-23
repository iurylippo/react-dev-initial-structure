import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '../routes';
import '../styles/sass/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import { store, persitor } from '../store';
import history from '../services/history';

const App = () => (
    <Router history={history}>
        <PersistGate loading={null} persistor={persitor}>
            <Provider store={store}>
                <Routes />
                <ToastContainer />
            </Provider>
        </PersistGate>
    </Router>
);

export default App;
