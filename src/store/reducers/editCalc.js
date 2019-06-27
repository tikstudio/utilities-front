import {
  EDIT_CALC_REQUEST,
  EDIT_CALC_SUCCESS,
  EDIT_CALC_FAIL,
} from '../actions/editCalc';

const initialState = {
  calculator: {},
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_CALC_REQUEST: {
      return {
        ...state,
        calculator: {},
      };
    }
    case EDIT_CALC_SUCCESS: {
      const {calculator, id,} = action.payload.data;
      return {
        ...state,
        calculator,
        id,
      };
    }
    case EDIT_CALC_FAIL: {
      return {
        ...state,
        calculator: {},
      };
    }
    default: {
      return state;
    }
  }
}
