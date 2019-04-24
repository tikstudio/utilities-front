
export const SIGNIN_USERS_REQUEST = 'SIGNUP_USERS_REQUEST';
export const SIGNIN_USERS_SUCCESS = 'SIGNUP_USERS_SUCCESS';
export const SIGNIN_USERS_FAIL = 'SIGNUP_USERS_FAIL';
export const SAVE_USERS_REQUEST = 'SAVE_USERS_REQUEST';
export const SAVE_USERS_SUCCESS = 'SAVE_USERS_SUCCESS';
export const SAVE_USERS_FAIL = 'SAVE_USERS_FAIL';

export function signIn(data) {
    return {
        type: SIGNIN_USERS_REQUEST, payload: {data}
    }
}

export function saveUsers(data) {
    return {
        type: SAVE_USERS_REQUEST, payload: {data}
    }
}