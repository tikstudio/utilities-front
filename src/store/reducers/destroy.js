import {
  DESTROY_PEOPLE_REQUEST,
  DESTROY_PEOPLE_SUCCESS,
  DESTROY_PEOPLE_FAIL,
} from '../actions/destroy';

const initialState = {
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_PEOPLE_REQUEST: {
      return {
        ...state,
        id: null,
      };
    }
    case DESTROY_PEOPLE_SUCCESS: {
      const {id} = action.payload.data;
      return {
        ...state,
        id,
      };
    }
    case DESTROY_PEOPLE_FAIL: {
      return {
        ...state,
        id: null,
      };
    }
    default: {
      return state;
    }
  }
}
