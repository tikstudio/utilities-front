import {
    REGISTRATION_PEOPLE_REQUEST,
    REGISTRATION_PEOPLE_SUCCESS,
    REGISTRATION_PEOPLE_FAIL,
} from '../actions/registration';

const initialState = {
    people: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_PEOPLE_REQUEST: {
            return {
                ...state,
                people: {},
            };
        }
        case REGISTRATION_PEOPLE_SUCCESS: {
            const {people} = action.payload.data;
            return {
                ...state,
                people,
            };
        }
        case REGISTRATION_PEOPLE_FAIL: {
            return {
                ...state,
                people: {},
            };
        }
        default: {
            return state;
        }
    }
}
