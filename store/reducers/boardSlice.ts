import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "store/store";

interface boardState {
    data: any
}

const initialState: boardState = {
    data: {}
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
			setBoardData: (state, action) => {
				state.data = action.payload
			}
		},
    extraReducers: {
        [HYDRATE]: (state, action) => {
					state.data = action.payload.boardReducer.data
				}
    }
})
export const {setBoardData} = boardSlice.actions
export const boardData = (state: AppState) => state.boardReducer
export default boardSlice.reducer;