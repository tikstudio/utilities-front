import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAIL,
} from '../actions/peoples';

const initialState = {
  peopleSingle: {},
  peoples: [],
  page: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLES_REQUEST: {
      return {
        ...state,
        peoples: [],
        peopleSingle: {},
      };
    }
    case GET_PEOPLES_SUCCESS: {
      const { peoples, page } = action.payload.data;
      return {
        ...state,
        peoples,
        page,
      };
    }
    case GET_PEOPLES_FAIL: {
      return {
        ...state,
        peoples: [],
        peopleSingle: {},
      };
    }
    default: {
      return state;
    }
  }
}
