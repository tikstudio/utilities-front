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
        id:null,
      };
    }
    case EDIT_CALC_SUCCESS: {
      const {calculator, id} = action.payload.data;
      console.log(calculator, 99999992112)
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
        id:null,
      };
    }
    default: {
      return state;
    }
  }
}
