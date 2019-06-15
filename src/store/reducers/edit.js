import {
  EDIT_PEOPLE_REQUEST,
  EDIT_PEOPLE_SUCCESS,
  EDIT_PEOPLE_FAIL,
} from '../actions/edit';

const initialState = {
  people: {},
  id: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_PEOPLE_REQUEST: {
      return {
        ...state,
        people: {},
      };
    }
    case EDIT_PEOPLE_SUCCESS: {
      const {people, id,} = action.payload.data;
      return {
        ...state,
        people,
        id,
      };
    }
    case EDIT_PEOPLE_FAIL: {
      return {
        ...state,
        people: {},
      };
    }
    default: {
      return state;
    }
  }
}
