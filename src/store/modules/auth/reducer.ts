import { AuthAction, AuthState } from './types';

const initalState: AuthState = {
    loadingSigninRequest: false,
    isSignin: false,
    error: false,
    token: null,
};

export default function auth(state = initalState, action: AuthAction): AuthState {
    switch (action.type) {
        case '@auth/SIGN_IN_REQUEST':
            return {
                ...state,
                loadingSigninRequest: true,
            };

        case '@auth/SIGN_IN_SUCCESS':
            return {
                ...state,
                loadingSigninRequest: false,
                isSignin: true,
                token: action.payload.token,
            };

        case '@auth/SIGN_IN_FAILURE':
            return {
                ...state,
                loadingSigninRequest: false,
                error: true,
            };

        default:
            return state;
    }
}
