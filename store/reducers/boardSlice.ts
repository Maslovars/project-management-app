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
  changeTask,
  changeColumnTitle,
  changeColumnOrder,
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
  isTaskChanger: boolean;
  currentColumnId: string;
  currentTitle: string;
  currentOrder: number | null;
  currentDescription: string;
  currentUserId: string;
  currentBoardId: string;
  currentTaskId: string;
  users: UserI[];
}

const initialState: boardState = {
  data: null,
  isLoading: false,
  error: null,
  isColumnCreator: false,
  isTaskCreator: false,
  isTaskChanger: false,
  currentColumnId: '',
  currentTitle: '',
  currentOrder: null,
  currentDescription: '',
  currentUserId: '',
  currentBoardId: '',
  currentTaskId: '',
  users: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoardData: (state, action) => {
      state.data = action.payload;
    },
    setColumnData: (state, action) => {
      state.data.columns = action.payload;
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
    showTaskChanger: (state, action) => {
      state.error = null;
      state.currentColumnId = action.payload.columnId;
      state.currentTitle = action.payload.title;
      state.currentOrder = action.payload.order;
      state.currentDescription = action.payload.description;
      state.currentUserId = action.payload.userId;
      state.currentBoardId = action.payload.boardId;
      state.currentTaskId = action.payload.id;
      state.isTaskChanger = true;
    },
    closeTaskChanger: (state) => {
      state.error = null;
      state.isTaskChanger = false;
      state.currentColumnId = '';
      state.currentTitle = '';
      state.currentOrder = null;
      state.currentDescription = '';
      state.currentUserId = '';
      state.currentBoardId = '';
      state.currentTaskId = '';
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.boardReducer.data;
    },

    [fetchBoardData.pending.type]: (state, action) => {
      // state.isLoading = true;
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
    [changeTask.pending.type]: (state, action) => {
      state.error = null;
    },
    [changeTask.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
    [changeColumnTitle.pending.type]: (state, action) => {
      state.error = null;
    },
    [changeColumnTitle.rejected.type]: (state, action) => {
      state.error = action.payload;
    },

    [changeColumnOrder.pending.type]: (state, action) => {
      state.error = null;
    },
    [changeColumnOrder.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  setBoardData,
  setColumnData,
  showColumnCreator,
  closeColumnCreator,
  showTaskCreator,
  closeTaskCreator,
  showTaskChanger,
  closeTaskChanger,
} = boardSlice.actions;
export const boardData = (state: AppState) => state.boardReducer;
export default boardSlice.reducer;
