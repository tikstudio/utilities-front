import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  GET_REGIONS_REQUEST,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
} from '../actions/regions';



function* getRegions(action) {
  try {
    const {data, regions} = yield call(api.getRegions, action.payload.data);
    yield put({
      type: GET_REGIONS_SUCCESS,
      payload: {data, regions},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_REGIONS_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(GET_REGIONS_REQUEST, getRegions);
}
