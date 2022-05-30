import { createSlice } from '@reduxjs/toolkit';

interface authState {
  data: [];
}

const initialState: authState = {
  data: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
