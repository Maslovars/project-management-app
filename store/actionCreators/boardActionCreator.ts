import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseUrl = 'https://kanban-rest77.herokuapp.com';
export const mockBoardId = 'da90f759-014e-40fc-96d1-0970631acb80';
export const mockUserToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTM2NzJhOS1jY2JkLTRjMmEtOGI1Yy0zYjAzNDQyNzQ4YzUiLCJsb2dpbiI6InRlc3QxMjMiLCJpYXQiOjE2NTM2MzMyNjJ9.melw7nOQCOT9rcO6Kz6JaKWmLFh8Tgq4GxBTF5R1Ty4';

interface deleteColumnI {
  boardId: string;
  id: string;
}

interface createColumnI {
  boardId: string;
  title: string;
}

interface createTaskI {
  boardId: string;
  title: string;
  description: string;
  assigned: string;
  currentColumnId: string;
}

interface deleteTaskI {
  boardId: string;
  columnId: string;
  id: string;
}

export const fetchBoardData = createAsyncThunk(
  'board/fetchBoardData',

  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`${baseUrl}/boards/${mockBoardId}`, {
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
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
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

      thunkAPI.dispatch(fetchBoardData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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

      thunkAPI.dispatch(fetchBoardData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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

      thunkAPI.dispatch(fetchBoardData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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

      thunkAPI.dispatch(fetchBoardData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
