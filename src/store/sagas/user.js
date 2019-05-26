import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from '../../api'

import {

  SIGNIN_USERS_REQUEST,
  SIGNIN_USERS_SUCCESS,
  SIGNIN_USERS_FAIL,
} from "../actions";


function* requestSignIn(action) {
  try {
    const { data } = yield call(api.login, action.payload.data);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    yield put({
      type: SIGNIN_USERS_SUCCESS,
      payload: { user: data.user }
    });
  } catch (e) {
    yield put({
      type: SIGNIN_USERS_FAIL,
      message: e.message,
    })
  }
}

export default function* watchers() {
  yield takeLatest(SIGNIN_USERS_REQUEST, requestSignIn)
}
