import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from 'store/store';
import { BoardType } from '@/types/data';
import { fetchBoardData, deleteColumn, createColumn } from '../actionCreators/boardActionCreator';

interface boardState {
  data: BoardType;
  isLoading: boolean;
  error: null | string;
  isColumnCreator: boolean;
}

const initialState: boardState = {
  data: null,
  isLoading: false,
  error: null,
  isColumnCreator: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoardData: (state, action) => {
      state.data = action.payload;
    },
    showColumnCreator: (state) => {
      state.error = null;
      state.isColumnCreator = true;
    },
    closeColumnCreator: (state) => {
      state.error = null;
      state.isColumnCreator = false;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.boardReducer.data;
    },

    [fetchBoardData.pending.type]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchBoardData.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchBoardData.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteColumn.pending.type]: (state, action) => {
      state.error = null;
    },
    [deleteColumn.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
    [createColumn.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setBoardData, showColumnCreator, closeColumnCreator } = boardSlice.actions;
export const boardData = (state: AppState) => state.boardReducer;
export default boardSlice.reducer;
