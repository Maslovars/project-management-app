import authReducer from './reducers/authSlice';
import boardReducer from './reducers/boardSlice'
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';


const rootReducer = combineReducers({
    authReducer,
    boardReducer
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore);
