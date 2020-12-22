import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';
import * as actions from './actions';
import { auth } from '../../../services/endpoints';
import history from '../../../services/history';

function forwardTo(location: string) {
    history.push(location);
}

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
    try {
        const { email, password } = payload;

        const { data } = yield call(api.post, auth['/login'], {
            email,
            password,
        });
        console.log(data);
        yield put(actions.signInSuccess({ token: data.token, userName: 'Trinity' }));
        yield call(forwardTo, '/dashboard');
    } catch (err) {
        yield put(actions.signInFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
