import {
  DESTROY_CALC_REQUEST,
  DESTROY_CALC_SUCCESS,
  DESTROY_CALC_FAIL,
} from '../actions/destroyCalc';

const initialState = {
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_CALC_REQUEST: {
      return {
        ...state,
        id: null,
      };
    }
    case DESTROY_CALC_SUCCESS: {
      const {id} = action.payload.data;
      return {
        ...state,
        id,
      };
    }
    case DESTROY_CALC_FAIL: {
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
