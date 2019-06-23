import {
  GET_CALCULATORS_REQUEST,
  GET_CALCULATORS_SUCCESS,
  GET_CALCULATORS_FAIL,
} from '../actions/getCalc';

const initialState = {
  calculators: [],
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

    default: {
      return state;
    }
  }
}
