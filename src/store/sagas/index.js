import { all, fork } from 'redux-saga/effects';
import user from './users';
import types from './types';

export default function* root() {
  const sagas = [
    user,
    types,
  ];
  yield all(sagas.map(fork));
}
