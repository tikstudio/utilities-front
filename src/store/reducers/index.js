import {
    SIGNIN_USERS_REQUEST,
    SIGNIN_USERS_SUCCESS,
    SIGNIN_USERS_FAIL,
    SAVE_USERS_REQUEST,
    SAVE_USERS_SUCCESS,
    SAVE_USERS_FAIL,
} from "../actions/index";

const initialState = {
    usersData: {},
    signIn: {},
    saveUsers: {}
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
        case SAVE_USERS_REQUEST:{
            return {...state,saveUsers:{}}
        }
        case SAVE_USERS_SUCCESS:{
            return {...state,usersData: action.payload.data}
        }
        case SAVE_USERS_FAIL: {
            return {...state, usersData: {}}
        }

        default : {
            return state
        }
    }

}
