import {MANAGER_USERS_REQUEST, MANAGER_USERS_SUCCESS, MANAGER_USERS_FAIL} from "../actions/manager";

const initialState = {
  peoples: 'ok'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MANAGER_USERS_REQUEST : {
      return {...state, manager: {}}
    }
    case MANAGER_USERS_SUCCESS: {
      return { peoples : action.payload.data}
    }
    case MANAGER_USERS_FAIL: {
      return {...state, manager: {}}
    }
    default : {
      return state
    }
  }
}