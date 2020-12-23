import { action } from 'typesafe-actions';

type SignInRequestProps = {
    email: string;
    password: string;
};

type SignInSuccessProps = {
    token: string;
    userName: string;
};

export function signInRequest({ email, password }: SignInRequestProps) {
    return action('@auth/SIGN_IN_REQUEST', {
        email,
        password,
    });
}

export function signInSuccess({ token, userName }: SignInSuccessProps) {
    return action('@auth/SIGN_IN_SUCCESS', {
        token,
        userName,
    });
}

export function logoutRequest() {
    return action('@auth/LOGOUT_REQUEST');
}

export function logoutSuccess() {
    return action('@auth/LOGOUT_SUCCESS');
}

export function signInFailure() {
    return action('@auth/SIGN_IN_FAILURE');
}
