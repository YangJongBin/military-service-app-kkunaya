import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions';

const initState: InitState = {
  isLoading: false,
};
  
// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
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