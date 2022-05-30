import { fetchBoards } from 'store/actionCreators/mainActionCreator';
import { BoardType } from '@/types/data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface mainState {
  boards: BoardType[];
  isLoading: boolean;
  error: string;
}

const initialState: mainState = {
  boards: [],
  isLoading: false,
  error: '',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBoards.fulfilled.type]: (state, action: PayloadAction<BoardType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.boards = action.payload;
    },
    [fetchBoards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBoards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mainSlice.reducer;
