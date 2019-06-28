export const PAY_USERS_REQUEST = 'PAY_USERS_REQUEST';
export const PAY_USERS_SUCCESS = 'PAY_USERS_SUCCESS';
export const PAY_USERS_FAIL = 'PAY_USERS_FAIL';

export function pay(data) {
    return {
        type: PAY_USERS_REQUEST, payload: {data}
    }
}
console.log("actions-info");
