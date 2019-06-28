import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  EDIT_CALC_REQUEST,
  EDIT_CALC_SUCCESS,
  EDIT_CALC_FAIL,
} from '../actions/editCalc';

function* editCalc(action) {
  try {
    const {data} = yield call(api.editCalc, action.payload.data);
    console.log(data, 100000000000000)
    yield put({
      type: EDIT_CALC_SUCCESS,
      payload: {data},
    });
  } catch (e) {
    console.warn(e)
    yield put({
      type: EDIT_CALC_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(EDIT_CALC_REQUEST, editCalc);
}
