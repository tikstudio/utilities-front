import {TYPES_REQUEST, TYPES_SUCCESS} from '../actions/types';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES_REQUEST: {
      return {...state};
    }
    case TYPES_SUCCESS: {
      return {
        ...state,
        list: action.payload.types,
      };
    }

    default: {
      return state;
    }
  }
}
