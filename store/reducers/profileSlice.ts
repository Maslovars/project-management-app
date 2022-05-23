import { createSlice } from "@reduxjs/toolkit"

interface profileState {
    data: any
}

const initialState: profileState = {
    data: []
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default profileSlice.reducer;