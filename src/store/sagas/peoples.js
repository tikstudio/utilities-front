import {takeLatest, call, put} from 'redux-saga/effects';
import * as api from '../../api';

import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAIL,
  GET_PEOPLE_BY_ID_REQUEST,
  GET_PEOPLE_BY_ID_SUCCESS,
  GET_PEOPLE_BY_ID_FAIL,
} from '../actions/peoples';


function* getPeoples(action) {
  try {
    const {data, page, totalPage} = yield call(api.getPeoples, action.payload.data);
    yield put({
      type: GET_PEOPLES_SUCCESS,
      payload: {data, page, totalPage},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_PEOPLES_FAIL,
      message: e.message,
    });
  }
}


function* getPeopleById(action) {
  try {
    const {data} = yield call(api.getPeopleById, action.payload.id);
    yield put({
      type: GET_PEOPLE_BY_ID_SUCCESS,
      payload: {people: data.people},
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_PEOPLE_BY_ID_FAIL,
      message: e.message,
    });
  }
}


export default function* watchers() {
  yield takeLatest(GET_PEOPLES_REQUEST, getPeoples);
  yield takeLatest(GET_PEOPLE_BY_ID_REQUEST, getPeopleById);
}
