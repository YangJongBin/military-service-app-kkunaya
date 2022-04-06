import {combineReducers} from 'redux';
import init from './init';
import login from './login';
import selectSoldier from './selectSoldier';

const rootReducer = combineReducers({
  init,
  login,
  selectSoldier
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
