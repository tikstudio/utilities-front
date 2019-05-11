import {
    SAVE_USERS_REQUEST,
    SAVE_USERS_SUCCESS,
    SAVE_USERS_FAIL,
} from "../actions/save";

const initialState = {
    usersData: {},
    signIn: {},
    saveUsers: {}
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SAVE_USERS_REQUEST: {
            return {...state, saveUsers: {}}
        }
        case SAVE_USERS_SUCCESS: {
            return {...state, usersData: action.payload.data}
        }
        case SAVE_USERS_FAIL: {
            return {...state, usersData: {}}
        }

        default : {
            return state
        }
    }

};
