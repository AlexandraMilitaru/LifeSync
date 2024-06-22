import initialState from './state';
import { Status } from '../../enums/status-enum';
import { RootState } from '../../store';
import { getAllCategories } from './thunks';
import { CategoriesFunctionality } from './constants';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        reset: (state, { payload }: PayloadAction<CategoriesFunctionality>) => {
            state.statuses[payload] = Status.Idle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.statuses.getAll = Status.Pending;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.statuses.getAll = Status.Fulfilled;
                state.categories = payload.categories;
            })
            .addCase(getAllCategories.rejected, (state) => {
                state.statuses.getAll = Status.Rejected;
            })
    }
})

export const selectStatusByFunctionality = (state: RootState, functionality: CategoriesFunctionality) => state.categories.statuses[functionality]

export const { reset } = categoriesSlice.actions;
export default categoriesSlice.reducer;