import { combineReducers } from 'redux';
import * as recipeReducer from './recipeReducer';
import * as types from '../constants/actionType';

const rootReducer = (state, action) => {
  if(types.USER_LOGOUT === 'USER_LOGOUT'){
    state = {};
  }
  return state;
}

const appReducer = combineReducers({
  rootReducer,
  ...recipeReducer
})

export default appReducer;