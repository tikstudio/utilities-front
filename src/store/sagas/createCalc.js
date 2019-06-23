import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  CREATE_CALC_REQUEST,
  CREATE_CALC_SUCCESS,
  CREATE_CALC_FAIL,
} from '../actions/createCalc';

function* createCalc(action) {
  try {
    const {data} = yield call(api.createCalc, action.payload.data);
    yield put({
      type: CREATE_CALC_SUCCESS,
      payload: {data},
    });
  } catch (e) {
    yield put({
      type: CREATE_CALC_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(CREATE_CALC_REQUEST, createCalc);
}
