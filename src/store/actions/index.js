
export const SIGNIN_USERS_REQUEST = 'SIGNIN_USERS_REQUEST';
export const SIGNIN_USERS_SUCCESS = 'SIGNIN_USERS_SUCCESS';
export const SIGNIN_USERS_FAIL = 'SIGNIN_USERS_FAIL';


export function signIn(data) {
    return {
        type: SIGNIN_USERS_REQUEST, payload: {data}
    }
}
