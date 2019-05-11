
export const SAVE_USERS_REQUEST = 'SAVE_USERS_REQUEST';
export const SAVE_USERS_SUCCESS = 'SAVE_USERS_SUCCESS';
export const SAVE_USERS_FAIL = 'SAVE_USERS_FAIL';


export function saveUsers(data) {
    return {
        type: SAVE_USERS_REQUEST, payload: {data}
    }
}