import { createSlice } from "@reduxjs/toolkit"

interface boardState {
    data: any
}

const initialState: boardState = {
    data: []
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default boardSlice.reducer;