import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import destroy from './destroy';
import edit from './edit';
import searchPeople from './searchPeople';
import searchCalc from './searchCalc';
import regions from './regions';
import getCalc from './getCalc';
import destroyCalc from './destroyCalc';
import createCalc from './createCalc';



export default combineReducers({
  form,
  users,
  types,
  peoples,
  registration,
  destroy,
  edit,
  searchPeople,
  searchCalc,
  regions,
  getCalc,
  destroyCalc,
  createCalc,
});
