import {takeLatest, call, put} from 'redux-saga/effects'
import * as api from '../../api';

import {PAYER_USERS_REQUEST, PAYER_USERS_SUCCESS, PAYER_USERS_FAIL,} from "../actions/info";


function* payerInfo(action) {
    try {
        const data = yield call(api.payerInformation, action.payload.data);
        yield put({
            type: PAYER_USERS_SUCCESS,
            payload: data.data
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: PAYER_USERS_FAIL,
            message: e.message,
        })
    }
}

export default function* watchers() {
    yield takeLatest(PAYER_USERS_REQUEST, payerInfo)
}
console.log("sagas-info");
