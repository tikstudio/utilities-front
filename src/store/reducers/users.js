import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/users';

const initialState = {
  authError: '',
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {...state, authError: ''};
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authError: '',
        user: action.payload.user,
      };
    }
    case LOGIN_FAIL: {
      return {...state, authError: action.message};
    }

    default: {
      return state;
    }
  }
}
