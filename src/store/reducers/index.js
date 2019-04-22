import {
    SIGNIN_USERS_REQUEST,
    SIGNIN_USERS_SUCCESS,
    SIGNIN_USERS_FAIL
} from "../actions/index";

const initialState = {
    usersData: {},
    signIn: {},
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case SIGNIN_USERS_REQUEST : {
            return {...state, signIn: {}}
        }

        case SIGNIN_USERS_SUCCESS: {
            return {...state, usersData: action.payload.data}
        }

        case SIGNIN_USERS_FAIL: {
            return {...state, usersData: {}}
        }

        default : {
            return state
        }
    }

}
