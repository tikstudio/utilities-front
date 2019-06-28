import {PAYER_USERS_REQUEST, PAYER_USERS_SUCCESS, PAYER_USERS_FAIL} from "../actions/info";

const initialState = {
    info: []
};

export default function reducer(state = initialState, action) {
    console.log("reducers-info");

    switch (action.type) {
        case PAYER_USERS_REQUEST : {
            return {...state, payerInfo: {}}
        }
        case PAYER_USERS_SUCCESS: {
            return { info : action.payload.data}
        }
        case PAYER_USERS_FAIL: {
            return {...state, payerInfo: {}}
        }
        default : {
            return state
        }
    }
}
