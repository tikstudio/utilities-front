import {
  GET_CALCULATORS_REQUEST,
  GET_CALCULATORS_SUCCESS,
  GET_CALCULATORS_FAIL,
  GET_CALC_BY_ID_REQUEST,
  GET_CALC_BY_ID_SUCCESS,
  GET_CALC_BY_ID_FAIL,
} from '../actions/getCalc';

const initialState = {
  calculators: [],
  calculator: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CALCULATORS_REQUEST: {
      return {
        ...state,
        calculators: [],
      };
    }
    case GET_CALCULATORS_SUCCESS: {
      const {calculators} = action.payload.data;
      return {
        ...state,
        calculators,

      };
    }
    case GET_CALCULATORS_FAIL: {
      return {
        ...state,
        calculators: [],
      };
    }
    case GET_CALC_BY_ID_REQUEST: {
      return {
        ...state,
        calculator: {},
      };
    }
    case GET_CALC_BY_ID_SUCCESS: {
      const {calculator} = action.payload;
      return {
        ...state,
        calculator,
      };
    }
    case GET_CALC_BY_ID_FAIL: {
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
