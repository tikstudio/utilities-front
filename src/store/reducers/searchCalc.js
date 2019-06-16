import {
  SEARCH_CALCULATORS_REQUEST,
  SEARCH_CALCULATORS_SUCCESS,
  SEARCH_CALCULATORS_FAIL,
} from '../actions/searchCalc';

const initialState = {
  peopleData: [],
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CALCULATORS_REQUEST: {
      return {
        ...state,
        peopleData: [],
      };
    }
    case SEARCH_CALCULATORS_SUCCESS: {
      const {peopleData, search} = action.payload.data;
      return {
        ...state,
        peopleData,
        search,
      };
    }
    case SEARCH_CALCULATORS_FAIL: {
      return {
        ...state,
        peopleData: [],

      };
    }
    default: {
      return state;
    }
  }
}
