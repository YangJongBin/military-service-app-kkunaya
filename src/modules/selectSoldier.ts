import {
  createReducer,
  createAction,
  ActionType,
} from 'typesafe-actions';

// 1. action type
export const SELECT_SOLDIER = 'SELECT_SOLDIER' as const;
export const SELECT_SOLDIER_REQUEST = 'SELECT_SOLDIER_REQUEST' as const;
export const SELECT_SOLDIER_SUCCESS = 'SELECT_SOLDIER_SUCCESS' as const;
export const SELECT_SOLDIER_FAILURE = 'SELECT_SOLDIER_FAILURE' as const;

// 2. action func
export const selectSoldier = createAction(SELECT_SOLDIER, (soldierInfo: object) => {
  console.log(soldierInfo);
  return soldierInfo;
})();

// 3. ready action type
const actions = {selectSoldier};
type InitAction = ActionType<typeof actions>;

// 4. ready state type
export type InitState = {
  displayName: string
  email: string
  type: number
};

// 5. state
const initState: InitState = {
  displayName: '',
  email: '',
  type: 0
};

// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
  [SELECT_SOLDIER]: (state, action) => ({
    displayName: state.displayName,
    email: state.email,
    type: state.type
  }),
});

export default reducer;
