import {createReducer} from 'typesafe-actions';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions';

interface InitState {
    isLoading: boolean,
}

const initState: InitState = {
  isLoading: false,
};
  
const reducer = createReducer(initState, {
  [LOGIN]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
});
  
export default reducer;