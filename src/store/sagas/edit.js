import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';

import {
  EDIT_PEOPLE_REQUEST,
  EDIT_PEOPLE_SUCCESS,
  EDIT_PEOPLE_FAIL,
} from '../actions/edit';


function* editPeople(action) {
  try {
    const {data} = yield call(api.editPeople, action.payload.data);
    yield put({
      type: EDIT_PEOPLE_SUCCESS,
      payload: {data},
    });
  } catch (e) {
    yield put({
      type: EDIT_PEOPLE_FAIL,
      message: e.message,
    });
  }
}

export default function* watchers() {
  yield takeLatest(EDIT_PEOPLE_REQUEST, editPeople);
}
