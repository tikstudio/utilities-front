import {takeLatest, call, put} from 'redux-saga/effects'
import * as api from '../../api';

import {SIGNIN_USERS_REQUEST, SIGNIN_USERS_SUCCESS, SIGNIN_USERS_FAIL,} from "../actions/user";


function* requestSignIn(action) {
    try {
        const data = yield call(api.signIn, action.payload.data);

        yield put({
            type: SIGNIN_USERS_SUCCESS,
            payload: {data}
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
