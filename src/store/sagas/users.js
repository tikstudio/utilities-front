import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/users';


function* requestSignIn(action) {
  try {
    const { data } = yield call(api.login, action.payload.data);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    yield put({
      type: LOGIN_SUCCESS,
      payload: { user: data.user },
    });
  } catch (e) {
    console.log(e.message);
    yield put({
      type: LOGIN_FAIL,
      message: e.response.data.message || e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(LOGIN_REQUEST, requestSignIn);
}
