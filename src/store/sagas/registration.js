import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../../api';

import {
    REGISTRATION_PEOPLE_REQUEST,
    REGISTRATION_PEOPLE_SUCCESS,
    REGISTRATION_PEOPLE_FAIL,
} from '../actions/registration';


function* registrationPeople(action) {
    try {
        const {data} = yield call(api.registrationPeople, action.payload.data);
        yield put({
            type: REGISTRATION_PEOPLE_SUCCESS,
            payload: {data},
        });
    } catch (e) {
        yield put({
            type: REGISTRATION_PEOPLE_FAIL,
            message: e.message,
        });
    }
}

export default function* watchers() {
    yield takeLatest(REGISTRATION_PEOPLE_REQUEST, registrationPeople);
}
