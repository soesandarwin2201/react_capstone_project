import { configureStore } from "@reduxjs/toolkit";
import bugReducer from '../Redux/BugApi';
import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  bugs: [],
  filterBugs: [],
  amount: 0,
  total: 0,
  isLoading: true,
}; ;

const reducer = combineReducers({
 bugReducer,
})

const store = configureStore({
 reducer
});

describe('check the reducer', () => {
 it('it should retrun the initial state', () => {
  expect(store.getState().bugReducer).toEqual(initialState);
 });

})

