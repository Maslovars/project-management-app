import { BoardType } from './../../types/data';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBoards = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(mainSlice.actions.boardFetching());
//         const response = await axios.get<BoardType[]>('https://kanban-rest77.herokuapp.com/boards', {
//             headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NGNmOTZkMi01OGZjLTRlMGMtOTZkOS05YWM0MjhkNGQ0OTUiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTIwMDMyMTF9.EUlvrrs0Hl7wq1o-vkW5eh710CeNmhTfivk8aYkO43I' }
//         });
//         dispatch(mainSlice.actions.boardFetchingSuccess(response.data));
//     } catch (err) {
//         dispatch(mainSlice.actions.boardFetchingError(err))
//     }
// }

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZWZjYmRlNy02OTVmLTQyY2EtODdjMi1jNzdiZGNkNDM1ZDciLCJsb2dpbiI6IkFyc2VueTIiLCJpYXQiOjE2NTM4MTEyMjl9.pKwTWt-eq-gaTDc7Mp4s8ELxv8Z-EMrmAvTlou7-2ak';

export const fetchBoards = createAsyncThunk('boards/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<BoardType[]>('https://kanban-rest77.herokuapp.com/boards', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to load boards');
  }
});

export const deleteBoard = createAsyncThunk('boards/delete', async (id: string, thunkAPI) => {
  try {
    const response = await axios.delete<BoardType[]>(
      `https://kanban-rest77.herokuapp.com/boards/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to delete board');
  }
});
