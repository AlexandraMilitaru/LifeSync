import { initialState } from './state';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'

export const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        }
    }
})

export const { setPage } = routerSlice.actions;
export default routerSlice.reducer;