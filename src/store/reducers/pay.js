import {PAY_USERS_REQUEST, PAY_USERS_SUCCESS, PAY_USERS_FAIL} from "../actions/pay";

const initialState = {
    pays: 'ok'
};

export default function reducer(state = initialState, action) {
    console.log("reducers-info");
    switch (action.type) {
        case PAY_USERS_REQUEST : {
            return {...state, pay: {}}
        }
        case PAY_USERS_SUCCESS: {
            return { pays : action.payload.data}
        }
        case PAY_USERS_FAIL: {
            return {...state, pay: {}}
        }
        default : {
            return state
        }
    }
}
