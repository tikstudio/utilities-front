import {takeLatest, call, put} from 'redux-saga/effects'
import * as api from '../../api';

import {PAY_USERS_REQUEST, PAY_USERS_SUCCESS, PAY_USERS_FAIL,} from "../actions/pay";


function* requestpay(action) {
    console.log("sagas-info");
    try {
        const data = yield call(api.pay, action.payload.data);
        yield put({
            type: PAY_USERS_SUCCESS,
            payload: data.data
    });
    } catch (e) {
        console.log(e);
        yield put({
            type: PAY_USERS_FAIL,
            message: e.message,
        })
    }
}

export default function* watchers() {
    yield takeLatest(PAY_USERS_REQUEST, requestpay)
}
