import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  SEARCH_CALCULATORS_REQUEST,
  SEARCH_CALCULATORS_SUCCESS,
  SEARCH_CALCULATORS_FAIL,
} from '../actions/searchCalc';

function* searchCalc(action) {
  try {
    const {data, peopleData, search} = yield call(api.searchCalc, action.payload.data);
    yield put({
      type: SEARCH_CALCULATORS_SUCCESS,
      payload: {data, peopleData, search},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SEARCH_CALCULATORS_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(SEARCH_CALCULATORS_REQUEST, searchCalc);
}
