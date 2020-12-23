import { applyMiddleware, compose, createStore, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';

export interface StoreState {
    auth: AuthState;
}
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type StoreAction = AuthAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhacer = composeEnhancers(applyMiddleware(...middlewares));

    return createStore(reducers, enhacer);
};
