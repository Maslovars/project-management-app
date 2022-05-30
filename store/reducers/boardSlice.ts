import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from 'store/store';
import { BoardType } from '@/types/data';
import {
  fetchBoardData,
  deleteColumn,
  createColumn,
  fetchUsers,
  createTask,
  deleteTask,
} from '../actionCreators/boardActionCreator';

interface UserI {
  id: string;
  name: string;
  login: string;
}

interface boardState {
  data: BoardType;
  isLoading: boolean;
  error: null | string;
  isColumnCreator: boolean;
  isTaskCreator: boolean;
  currentColumnId: string;
  users: UserI[];
}

const initialState: boardState = {
  data: null,
  isLoading: false,
  error: null,
  isColumnCreator: false,
  isTaskCreator: false,
  currentColumnId: '',
  users: [],
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
    showTaskCreator: (state, action) => {
      state.error = null;
      state.isTaskCreator = true;
      state.currentColumnId = action.payload;
    },
    closeTaskCreator: (state) => {
      state.error = null;
      state.isTaskCreator = false;
      state.currentColumnId = '';
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
    [fetchUsers.pending.type]: (state, action) => {
      state.error = null;
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action) => {
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
    [createTask.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
    [deleteTask.pending.type]: (state, action) => {
      state.error = null;
    },
    [deleteTask.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  setBoardData,
  showColumnCreator,
  closeColumnCreator,
  showTaskCreator,
  closeTaskCreator,
} = boardSlice.actions;
export const boardData = (state: AppState) => state.boardReducer;
export default boardSlice.reducer;
