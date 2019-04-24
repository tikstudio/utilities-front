import {takeLatest, call, put} from 'redux-saga/effects'
import * as api from '../../apies/saveUsersApi';

import {
    SAVE_USERS_REQUEST,
    SAVE_USERS_SUCCESS,
    SAVE_USERS_FAIL,
} from "../actions";



function* requestSaveUsers(action) {
    try {
        const log = yield call(api.saveUsersApi, action.payload.data);
        console.log(log);

        yield put({
            type: SAVE_USERS_SUCCESS,
            payload: {log}
        });
    } catch (e) {
        yield put({
            type: SAVE_USERS_FAIL,
            message: e.message,
        })
    }
}

export default function* watchers() {
    yield takeLatest(SAVE_USERS_REQUEST, requestSaveUsers)
}
