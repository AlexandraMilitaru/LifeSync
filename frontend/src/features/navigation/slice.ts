import { initialState } from './state';
import { NavigationData } from './types';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        navigate: (state, { payload }: PayloadAction<NavigationData>) => {
            state.url = payload.url;
        },
        reset: (state) => {
            state.url = null;
        }
    }
})

export const { navigate, reset } = navigationSlice.actions;
export default navigationSlice.reducer;