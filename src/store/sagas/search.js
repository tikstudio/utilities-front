import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  SEARCH_PEOPLES_REQUEST,
  SEARCH_PEOPLES_SUCCESS,
  SEARCH_PEOPLES_FAIL,
} from '../actions/search';


function* searchPeoples(action) {
  try {
    const {data, search, people} = yield call(api.searchPeoples, action.payload.data);
    yield put({
      type: SEARCH_PEOPLES_SUCCESS,
      payload: {data, people, search},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SEARCH_PEOPLES_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(SEARCH_PEOPLES_REQUEST, searchPeoples);
}
