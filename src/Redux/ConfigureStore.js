import { configureStore } from "@reduxjs/toolkit";
import bugReducer from './BugApi';

const store = configureStore({
   reducer : {
    bugs : bugReducer,
   }
});

export default store;