import { all, fork } from 'redux-saga/effects';
import user from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import destroy from './destroy';

export default function* root() {
  const sagas = [
    user,
    types,
    peoples,
    registration,
    destroy,
  ];
  yield all(sagas.map(fork));
}
