import {combineReducers} from 'redux'
import user from './user';
import manager from './manager';

const reducers = combineReducers({
    user,
    manager
});

export default reducers;
