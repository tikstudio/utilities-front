import {
  GET_REGIONS_REQUEST,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
} from '../actions/regions';

const initialState = {
  regions: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REGIONS_REQUEST: {
      return {
        ...state,
        regions: [],
      };
    }
    case GET_REGIONS_SUCCESS: {
      const {regions} = action.payload.data;
      return {
        ...state,
        regions,
      };
    }
    case GET_REGIONS_FAIL: {
      return {
        ...state,
        regions: [],
      };
    }
    default: {
      return state;
    }
  }
}
