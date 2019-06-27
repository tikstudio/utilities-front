import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAIL,
  GET_PEOPLE_BY_ID_REQUEST,
  GET_PEOPLE_BY_ID_SUCCESS,
  GET_PEOPLE_BY_ID_FAIL,
} from '../actions/peoples';

const initialState = {
  peoples: [],
  id: null,
  page: null,
  totalPage: null,
  people: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLES_REQUEST: {
      return {
        ...state,
        peoples: [],
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
        people: {},
      };
    }
    case GET_PEOPLE_BY_ID_SUCCESS: {
      const {people} = action.payload;
      return {
        ...state,
        people,
      };
    }
    case GET_PEOPLE_BY_ID_FAIL: {
      return {
        ...state,
        peoples: [],
        people: {},
      };
    }

    default: {
      return state;
    }
  }
}