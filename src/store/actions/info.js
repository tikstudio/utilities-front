export const PAYER_USERS_REQUEST = 'PAYER_USERS_REQUEST';
export const PAYER_USERS_SUCCESS = 'PAYER_USERS_SUCCESS';
export const PAYER_USERS_FAIL = 'PAYER_USERS_FAIL';

export function payerInfo(data) {
    return {
        type: PAYER_USERS_REQUEST, payload: {data}
    }
}
