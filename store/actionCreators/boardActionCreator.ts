import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ColumnTypes } from '@/types/data';
import {
  deleteColumnI,
  createColumnI,
  createTaskI,
  deleteTaskI,
  changeTaskI,
  changeColumnTitleI,
  changeColumnOrderI,
} from '../types/boardAction';

export const baseUrl = 'https://kanban-rest77.herokuapp.com';
export const mockBoardId = '207be9a7-be16-41f6-a193-a29bc6b7d16d';
export const mockUserToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM5MzQ4OTB9.xTkaPO5Kxj1ugNet5LI_duZv7yCQTblTrtXhncwtyY8';

export const fetchBoardData = createAsyncThunk(
  'board/fetchBoardData',

  async function (boardId: string, { rejectWithValue }) {
    try {
      const response = await axios.get(`${baseUrl}/boards/${boardId}`, {
        headers: {
          Authorization: `Bearer ${mockUserToken}`,
        },
      });

      if (response.statusText !== 'OK') {
        throw new Error('Server Error');
      }

      const data = await response.data;

      const newState = JSON.parse(JSON.stringify(data));
      newState.columns.sort(function (a: ColumnTypes, b: ColumnTypes) {
        if (a.order > b.order) {
          return 1;
        }
        if (a.order < b.order) {
          return -1;
        }
        return 0;
      });

      newState.columns.map((column: ColumnTypes) => {
        column.tasks.sort(function (a, b) {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          return 0;
        });
      });

      return newState;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  'board/fetchUsers',

  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${mockUserToken}`,
        },
      });

      if (response.statusText !== 'OK') {
        throw new Error('Server Error');
      }

      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'board/deleteColumn',

  async (params: deleteColumnI, thunkAPI) => {
    const { boardId, id } = params;
    try {
      const response = await axios.delete(`${baseUrl}/boards/${boardId}/columns/${id}`, {
        headers: {
          Authorization: `Bearer ${mockUserToken}`,
        },
      });

      if (response.status !== 204) {
        throw new Error("Cant't delete column. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const createColumn = createAsyncThunk(
  'board/createColumn',

  async (params: createColumnI, thunkAPI) => {
    const { boardId, title } = params;
    try {
      const response = await axios.post(
        `${baseUrl}/boards/${boardId}/columns`,
        { title: title },
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Cant't add column. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'board/createTask',

  async (params: createTaskI, thunkAPI) => {
    const { boardId, title, description, assigned, currentColumnId } = params;
    try {
      const response = await axios.post(
        `${baseUrl}/boards/${boardId}/columns/${currentColumnId}/tasks`,
        { title: title, description: description, userId: assigned },
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Cant't add task. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'board/deleteColumn',

  async (params: deleteTaskI, thunkAPI) => {
    const { boardId, columnId, id } = params;
    try {
      const response = await axios.delete(
        `${baseUrl}/boards/${boardId}/columns/${columnId}/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 204) {
        throw new Error("Cant't delete task. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const changeTask = createAsyncThunk(
  'board/changeTask',

  async (params: changeTaskI, thunkAPI) => {
    const {
      currentBoardId,
      title,
      currentOrder,
      description,
      assigned,
      currentColumnId,
      currentTaskId,
      newColumnId,
    } = params;
    try {
      const response = await axios.put(
        `${baseUrl}/boards/${currentBoardId}/columns/${currentColumnId}/tasks/${currentTaskId}`,
        {
          title: title,
          order: currentOrder,
          description: description,
          userId: assigned,
          boardId: currentBoardId,
          columnId: newColumnId ? newColumnId : currentColumnId,
        },
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Cant't change task. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(currentBoardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const changeColumnTitle = createAsyncThunk(
  'board/changeColumnTitle',

  async (params: changeColumnTitleI, thunkAPI) => {
    const { boardId, columnId, title, columnOrder } = params;
    try {
      const response = await axios.put(
        `${baseUrl}/boards/${boardId}/columns/${columnId}`,
        { title: title, order: columnOrder },
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Cant't change Title. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const changeColumnOrder = createAsyncThunk(
  'board/changeColumnOrder',

  async (params: changeColumnOrderI, thunkAPI) => {
    const { boardId, columnId, title, columnOrder } = params;
    try {
      const response = await axios.put(
        `${baseUrl}/boards/${boardId}/columns/${columnId}`,
        { title: title, order: columnOrder },
        {
          headers: {
            Authorization: `Bearer ${mockUserToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Cant't change Order. Server error");
      }

      thunkAPI.dispatch(fetchBoardData(boardId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
