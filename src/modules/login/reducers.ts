import {createReducer} from 'typesafe-actions';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions';

interface InitState {
    isLoading: boolean,
}

const initState: InitState = {
  isLoading: false,
};
  
// 6. reducer
const reducer = createReducer(initState, {
  [LOGIN_REQUEST]: (state, action) => ({
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