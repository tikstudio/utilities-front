import {takeLatest, call, put} from 'redux-saga/effects'
import * as api from '../../api';

import {MANAGER_USERS_REQUEST, MANAGER_USERS_SUCCESS, MANAGER_USERS_FAIL,} from "../actions/manager";


function* requestmanager(action) {
  try {
    const data = yield call(api.manager, action.payload.data);
    yield put({
      type: MANAGER_USERS_SUCCESS,
      payload: data.data
    });
  } catch (e) {
    yield put({
      type: MANAGER_USERS_FAIL,
      message: e.message,
    })
  }
}

export default function* watchers() {
  yield takeLatest(MANAGER_USERS_REQUEST, requestmanager)
}