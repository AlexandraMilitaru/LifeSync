import { ResponseError } from '../../types/features-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoriesService } from './service';
import { GetCategoriesResponsePayload } from './types';

export const getAllCategories = createAsyncThunk<
    GetCategoriesResponsePayload,
    void,
    { rejectValue: ResponseError }
>(
    'categories/getAll',
    async (_, { rejectWithValue }) => {
        const response = await categoriesService.getAll();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)