import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middlwares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlwares);

sagaMiddleware.run(rootSaga);

export default store;
