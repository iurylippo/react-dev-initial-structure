import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from '../routes';
import '../styles/sass/global.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <div>
        <Routes />
        <ToastContainer />
    </div>
);

export default App;
