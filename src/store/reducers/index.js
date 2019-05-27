import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from './users';
import types from './types';

export default combineReducers({
  form,
  users,
  types
});
