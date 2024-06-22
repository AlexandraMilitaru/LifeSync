import initialState from './state';
import { Status } from '../../enums/status-enum';
import { RootState } from '../../store';
import { EventsFunctionality } from './constants';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    createEvent,
    getAllEvents,
    getEventById
} from './thunks';

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        reset: (state, { payload }: PayloadAction<EventsFunctionality>) => {
            state.statuses[payload] = Status.Idle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEvent.pending, (state) => {
                state.statuses.create = Status.Pending;
            })
            .addCase(createEvent.fulfilled, (state) => {
                state.statuses.create = Status.Fulfilled;
            })
            .addCase(createEvent.rejected, (state) => {
                state.statuses.create = Status.Rejected;
            })
            .addCase(getEventById.pending, (state) => {
                state.statuses.create = Status.Pending;
            })
            .addCase(getEventById.fulfilled, (state, { payload }) => {
                state.statuses.getById = Status.Fulfilled;
                state.event = payload;
            })
            .addCase(getEventById.rejected, (state) => {
                state.statuses.getById = Status.Rejected;
            })
            .addCase(getAllEvents.pending, (state) => {
                state.statuses.getById = Status.Pending;
            })
            .addCase(getAllEvents.fulfilled, (state, { payload }) => {
                state.statuses.create = Status.Fulfilled;
                state.events = payload.events;
            })
            .addCase(getAllEvents.rejected, (state) => {
                state.statuses.create = Status.Rejected;
            })
    }
})

export const selectStatusByFunctionality = (state: RootState, functionality: EventsFunctionality) => state.events.statuses[functionality]

export const { reset } = eventsSlice.actions;
export default eventsSlice.reducer;