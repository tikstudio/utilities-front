import { takeLatest, call, put } from 'redux-saga/effects';
import { TYPES_FAIL, TYPES_REQUEST, TYPES_SUCCESS } from '../actions/types';
import * as api from '../../api';

function* handleTypesRequest() {
  try {
    const { data } = yield call(api.getTypes);

    yield put({
      type: TYPES_SUCCESS,
      payload: { types: data.types },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: TYPES_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(TYPES_REQUEST, handleTypesRequest);
}
