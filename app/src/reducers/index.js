import { combineReducers } from 'redux';
// add reducers here
import { plantsReducer } from './plantsReducer';
import { userReducer } from './userReducer';

export default combineReducers({
    userReducer,
    plantsReducer
});