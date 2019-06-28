import { combineReducers } from 'redux';
import users from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import manager from './manager';
import pay from './pay';
import searchPeople from './searchPeople';
import searchCalc from './searchCalc';



export default combineReducers({
  manager,
  pay,
  users,
  types,
  peoples,
  registration,
  searchPeople,
  searchCalc,
});
