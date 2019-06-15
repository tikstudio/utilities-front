import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from './users';
import types from './types';
import peoples from './peoples';
import registration from './registration';
import destroy from './destroy';
import edit from './edit'
import search from './search'


export default combineReducers({
  form,
  users,
  types,
  peoples,
  registration,
  destroy,
  edit,
  search,
});
