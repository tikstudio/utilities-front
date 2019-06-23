import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  GET_CALCULATORS_REQUEST,
  GET_CALCULATORS_SUCCESS,
  GET_CALCULATORS_FAIL,
} from '../actions/getCalc';

function* getCalc(action) {
  try {
    const {data} = yield call(api.getCalc, action.payload.data);
    yield put({
      type: GET_CALCULATORS_SUCCESS,
      payload: {data},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_CALCULATORS_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(GET_CALCULATORS_REQUEST, getCalc);
}
