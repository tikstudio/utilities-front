import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  DESTROY_CALC_REQUEST,
  DESTROY_CALC_SUCCESS,
  DESTROY_CALC_FAIL,
} from '../actions/destroyCalc';


function* destroyCalc(action) {
  try {
    const {data, id} = yield call(api.destroyCalc, action.payload.data);
    yield put({
      type: DESTROY_CALC_SUCCESS,
      payload: {data, id},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: DESTROY_CALC_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(DESTROY_CALC_REQUEST, destroyCalc);
}
