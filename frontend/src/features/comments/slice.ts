import initialState from './state';
import { Status } from '../../enums/status-enum';
import { RootState } from '../../store';
import { CommentsFunctionality } from './constants';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    addComment
} from './thunks';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        reset: (state, { payload }: PayloadAction<CommentsFunctionality>) => {
            state.statuses[payload] = Status.Idle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.statuses.add = Status.Pending;
            })
            .addCase(addComment.fulfilled, (state) => {
                state.statuses.add = Status.Fulfilled;
            })
            .addCase(addComment.rejected, (state) => {
                state.statuses.add = Status.Rejected;
            })
    }
})

export const selectStatusByFunctionality = (state: RootState, functionality: CommentsFunctionality) => state.comments.statuses[functionality]

export const { reset } = commentsSlice.actions;
export default commentsSlice.reducer;