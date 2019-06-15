import {
  SEARCH_PEOPLES_REQUEST,
  SEARCH_PEOPLES_SUCCESS,
  SEARCH_PEOPLES_FAIL,
} from '../actions/search';

const initialState = {
  people: [],
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PEOPLES_REQUEST: {
      return {
        ...state,
        people: [],
      };
    }
    case SEARCH_PEOPLES_SUCCESS: {
      const {people, search} = action.payload.data;
      return {
        ...state,
        people,
        search,
      };
    }
    case SEARCH_PEOPLES_FAIL: {
      return {
        ...state,
        people: [],

      };
    }
    default: {
      return state;
    }
  }
}
