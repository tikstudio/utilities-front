import {all, fork} from 'redux-saga/effects';
import user from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import searchPeople from './searchPeople';
import searchCalc from './searchCalc';

export default function* root() {
  const sagas = [
    user,
    types,
    peoples,
    registration,
    searchPeople,
    searchCalc,
  ];
  yield all(sagas.map(fork));
}
