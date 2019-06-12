import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';

import {
    DESTROY_PEOPLE_REQUEST,
    DESTROY_PEOPLE_SUCCESS,
    DESTROY_PEOPLE_FAIL,
} from '../actions/destroy';


function* destroyPeoples(action) {
    try {
        const { data, id} = yield call(api.destroyPeoples, action.payload.data);
        yield put({
            type: DESTROY_PEOPLE_SUCCESS,
            payload: { data, id},
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: DESTROY_PEOPLE_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(DESTROY_PEOPLE_REQUEST, destroyPeoples);
}
