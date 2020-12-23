import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootStateOrAny } from 'react-redux';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middlwares: Middleware[] = [sagaMiddleware];

type ConfigState = {
    key: string;
};

const persistConfig: PersistConfig<ConfigState> = {
    key: 'root',
    storage,
};

const store = createStore(persistReducer<RootStateOrAny>(persistConfig, rootReducer), middlwares);
const persitor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persitor };
