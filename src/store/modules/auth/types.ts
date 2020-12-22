import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
    readonly loadingSigninRequest: boolean;
    readonly isSignin: boolean;
    readonly error: boolean;
    readonly token: string | null;
}
