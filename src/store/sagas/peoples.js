import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';

import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAIL,
} from '../actions/peoples';


function* getPeoples(action) {
  try {
    const { data, page, totalPage } = yield call(api.getPeoples, action.payload.data);
    yield put({
      type: GET_PEOPLES_SUCCESS,
      payload: { data, page,totalPage},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_PEOPLES_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(GET_PEOPLES_REQUEST, getPeoples);
}
