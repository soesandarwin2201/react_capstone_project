import { createAsyncThunk, createSlice , current } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const BUG_URL = 'https://acnhapi.com/v1a/bugs';

const initialState = {
  bugs: [],
  filterBugs : [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getBugData = createAsyncThunk('bug/getBugData', async () => {
  const response = await fetch(BUG_URL);
  const data = await response.json();
  return data;
});

const bugSlice = createSlice({
  name: 'bug',
  initialState,
  reducers : {
    filterReducer : (state , action ) => {
      return {...state , 
      filterBugs : state.bugs.filter(bug => {
        console.log((bug['file-name']).includes(action.payload));
        return bug['file-name'].includes(action.payload);
      }
        )  }
        
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBugData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBugData.fulfilled, (state, action) => {
      state.bugs = action.payload;
      state.filterBugs = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getBugData.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { filterReducer} = bugSlice.actions;
export default bugSlice.reducer;
