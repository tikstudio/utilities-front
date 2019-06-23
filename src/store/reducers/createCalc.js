import {
  CREATE_CALC_REQUEST,
  CREATE_CALC_SUCCESS,
  CREATE_CALC_FAIL,
} from '../actions/createCalc';

const initialState = {
  calculators: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CALC_REQUEST: {
      return {
        ...state,
        calculators: {},
      };
    }
    case CREATE_CALC_SUCCESS: {
      const {calculators} = action.payload.data;
      return {
        ...state,
        calculators,
      };
    }
    case CREATE_CALC_FAIL: {
      return {
        ...state,
        calculators: {},
      };
    }
    default: {
      return state;
    }
  }
}
