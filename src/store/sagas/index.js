import { all, fork } from 'redux-saga/effects';
import user from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';

export default function* root() {
  const sagas = [
    user,
    types,
    peoples,
    registration,
  ];
  yield all(sagas.map(fork));
}
