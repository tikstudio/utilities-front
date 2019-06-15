import {all, fork} from 'redux-saga/effects';
import user from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import destroy from './destroy';
import edit from './edit'
import search from './search'

export default function* root() {
  const sagas = [
    user,
    types,
    peoples,
    registration,
    destroy,
    edit,
    search,
  ];
  yield all(sagas.map(fork));
}
