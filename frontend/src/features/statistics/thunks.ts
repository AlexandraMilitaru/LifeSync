import { ResponseError } from '../../types/features-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { statisticsService } from './service';
import {
    GetTimeSpentPerDayResponsePayload,
    GetTotalExpensesPerMonthResponsePayload,
    GetNumberOfEventsPerCategoryResponsePayload
} from './types';

export const getTimeSpentPerDay = createAsyncThunk<
    GetTimeSpentPerDayResponsePayload,
    void,
    { rejectValue: ResponseError }
>(
    'statistics/getTimeSpentPerDay',
    async (_, { rejectWithValue }) => {
        const response = await statisticsService.getTimeSpentPerDay();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
);

export const getTotalExpensesPerMonth = createAsyncThunk<
    GetTotalExpensesPerMonthResponsePayload,
    void,
    { rejectValue: ResponseError }
>(
    'statistics/getTotalExpensesPerMonth',
    async (_, { rejectWithValue }) => {
        const response = await statisticsService.getTotalExpensesPerMonth();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
);

export const getNumberOfEventsPerCategory = createAsyncThunk<
    GetNumberOfEventsPerCategoryResponsePayload,
    void,
    { rejectValue: ResponseError }
>(
    'statistics/getNumberOfEventsPerCategory',
    async (_, { rejectWithValue }) => {
        const response = await statisticsService.getNumberOfEventsPerCategory();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
);