import { ResponseError } from '../../types/features-types';
import { commentsService } from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddCommentRequestPayload, AddCommentResponsePayload } from './types';

export const addComment = createAsyncThunk<
    AddCommentResponsePayload,
    AddCommentRequestPayload,
    { rejectValue: ResponseError }
>(
    'comments/add',
    async (requestPayload, { rejectWithValue }) => {
        const response = await commentsService.add(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)