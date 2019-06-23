import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAIL,
  GET_PEOPLE_BY_ID_REQUEST,
  GET_PEOPLE_BY_ID_SUCCESS,
  GET_PEOPLE_BY_ID_FAIL,
} from '../actions/peoples';

const initialState = {
  peopleSingle: {},
  peoples: [],
  page: null,
  totalPage: null,
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
      const {peoples, page, totalPage} = action.payload.data;
      return {
        ...state,
        peoples,
        page,
        totalPage,
      };
    }
    case GET_PEOPLES_FAIL: {
      return {
        ...state,
        peoples: [],
        peopleSingle: {},
      };
    }
    case GET_PEOPLE_BY_ID_REQUEST: {
      return {
        ...state,
        peoples: [],
      };
    }
    case GET_PEOPLE_BY_ID_SUCCESS: {
      const {peoples} = action.payload.data;
      return {
        ...state,
        peoples,
      };
    }
    case GET_PEOPLE_BY_ID_FAIL: {
      return {
        ...state,
        peoples: [],
      };
    }

    default: {
      return state;
    }
  }
}
