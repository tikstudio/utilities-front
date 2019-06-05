import { all, fork } from 'redux-saga/effects';
import user from './users';
import types from './types';
import peoples from './peoples';

export default function* root() {
  const sagas = [
    user,
    types,
    peoples,
  ];
  yield all(sagas.map(fork));
}
