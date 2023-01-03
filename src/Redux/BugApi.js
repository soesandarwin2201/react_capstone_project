import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const  BUG_URL = 'https://acnhapi.com/v1a/bugs';

const initialState = {
 bugs : [],
 amount : 0,
 total : 0,
 isLoading : true,
}

export const getBugData = createAsyncThunk('bug/getBugData', async() => {
 const response = await fetch(BUG_URL);
 const data = await response.json();
 return data;
});

const bugSlice = createSlice({
 name : 'bug',
 initialState,
 extraReducers: (builder) => {
  builder.addCase(getBugData.pending, (state,action) => {
   state.isLoading = true;
  });
  builder.addCase(getBugData.fulfilled, (state,action) => {
   state.bugs = action.payload;
   state.isLoading = false;
  });
  builder.addCase(getBugData.rejected, (state,action) => {
   state.isLoading = false;
  });
 }
})

export default bugSlice.reducer