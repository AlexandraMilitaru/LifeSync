import { Status } from '../../enums/status-enum';
import { useEffect } from 'react';
import { StatisticsFunctionality } from './constants';
import { selectStatusByFunctionality } from './slice';
import {
    useAppDispatch,
    useAppSelector
} from '../../store';
import {
    getTimeSpentPerDay,
    getTotalExpensesPerMonth,
    getNumberOfEventsPerCategory
} from './thunks';

const useEventsStatus = (statisticsFunc: StatisticsFunctionality) => {
    const status = useAppSelector((state) => selectStatusByFunctionality(state, statisticsFunc));

    const isIdle = status === Status.Idle;
    const isError = status === Status.Rejected;
    const isLoading = status === Status.Pending;
    const isSuccess = status === Status.Fulfilled;

    return { isIdle, isLoading, isError, isSuccess };
};

export const useGetTimeSpentPerDay = () => {
    const dispatch = useAppDispatch();

    const { timeSpentPerDay } = useAppSelector((state) => state.statistics);

    useEffect(() => {
        dispatch(getTimeSpentPerDay());
    }, [dispatch]);

    return { timeSpentPerDay, ...useEventsStatus(StatisticsFunctionality.GetTimeSpentPerDay) };
};

export const useGetTotalExpensesPerMonth = () => {
    const dispatch = useAppDispatch();

    const { totalExpensesPerMonth } = useAppSelector((state) => state.statistics);

    useEffect(() => {
        dispatch(getTotalExpensesPerMonth());
    }, [dispatch]);

    return { totalExpensesPerMonth, ...useEventsStatus(StatisticsFunctionality.GetTotalExpensesPerMonth) };
};

export const useGetNumberOfEventsPerCategory = () => {
    const dispatch = useAppDispatch();

    const numberOfEventsPerCategory = useAppSelector((state) => state.statistics.numberOfEventsPerCategory);

    useEffect(() => {
        dispatch(getNumberOfEventsPerCategory());
    }, [dispatch]);

    return { numberOfEventsPerCategory, ...useEventsStatus(StatisticsFunctionality.GetNumberOfEventsPerCategory) };
};