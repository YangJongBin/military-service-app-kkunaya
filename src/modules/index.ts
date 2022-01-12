import {combineReducers} from 'redux';
import init from './init';

const rootReducer = combineReducers({
  init,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
