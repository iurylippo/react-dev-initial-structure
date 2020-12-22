import { createActionTypesMap } from '../utils/helpers';

export const auth = createActionTypesMap('/api/v1/auth', ['/login']);

export const users = createActionTypesMap('/api/v1/system', ['/users']);
