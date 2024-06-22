import { eventsService } from './service';
import { ResponseError } from '../../types/features-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    CreateRequestPayload,
    CreateResponsePayload,
    GetByIdRequestPayload,
    GetByIdResponsePayload,
    GetAllByDateRequestPayload,
    GetAllByDateResponsePayload
} from './types';

export const createEvent = createAsyncThunk<
    CreateResponsePayload,
    CreateRequestPayload,
    { rejectValue: ResponseError }
>(
    'events/create',
    async (requestPayload: CreateRequestPayload, { rejectWithValue }) => {
        const response = await eventsService.create(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
);

export const getAllEvents = createAsyncThunk<
    GetAllByDateResponsePayload,
    GetAllByDateRequestPayload,
    { rejectValue: ResponseError }
>(
    'events/getAllByDate',
    async (requestPayload, { rejectWithValue }) => {
        const response = await eventsService.getAllByDate(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)

export const getEventById = createAsyncThunk<
    GetByIdResponsePayload,
    GetByIdRequestPayload,
    { rejectValue: ResponseError }
>(
    'events/getById',
    async (requestPayload: GetByIdRequestPayload, { rejectWithValue }) => {
        const response = await eventsService.getById(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)