import initialState from './state';
import { Status } from '../../enums/status-enum';
import { RootState } from '../../store';
import { StatisticsFunctionality } from './constants';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    getTimeSpentPerDay,
    getTotalExpensesPerMonth,
    getNumberOfEventsPerCategory
} from './thunks';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        reset: (state, { payload }: PayloadAction<StatisticsFunctionality>) => {
            state.statuses[payload] = Status.Idle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTimeSpentPerDay.pending, (state) => {
                state.statuses.getTimeSpentPerDay = Status.Pending;
            })
            .addCase(getTimeSpentPerDay.fulfilled, (state, { payload }) => {
                state.statuses.getTimeSpentPerDay = Status.Fulfilled;
                state.timeSpentPerDay = payload.timeSpentPerDay;
            })
            .addCase(getTimeSpentPerDay.rejected, (state) => {
                state.statuses.getTimeSpentPerDay = Status.Rejected;
            })
            .addCase(getTotalExpensesPerMonth.pending, (state) => {
                state.statuses.getTotalExpensesPerMonth = Status.Pending;
            })
            .addCase(getTotalExpensesPerMonth.fulfilled, (state, { payload }) => {
                state.statuses.getTotalExpensesPerMonth = Status.Fulfilled;
                state.totalExpensesPerMonth = payload.totalExpensesPerMonth;
            })
            .addCase(getTotalExpensesPerMonth.rejected, (state) => {
                state.statuses.getTotalExpensesPerMonth = Status.Rejected;
            })
            .addCase(getNumberOfEventsPerCategory.pending, (state) => {
                state.statuses.getNumberOfEventsPerCategory = Status.Pending;
            })
            .addCase(getNumberOfEventsPerCategory.fulfilled, (state, { payload }) => {
                state.statuses.getNumberOfEventsPerCategory = Status.Fulfilled;
                state.numberOfEventsPerCategory = payload.numberOfEventsPerCategory;
            })
            .addCase(getNumberOfEventsPerCategory.rejected, (state) => {
                state.statuses.getNumberOfEventsPerCategory = Status.Rejected;
            })

    }
})

export const selectStatusByFunctionality = (state: RootState, functionality: StatisticsFunctionality) => state.statistics.statuses[functionality]

export const { reset } = statisticsSlice.actions;
export default statisticsSlice.reducer;