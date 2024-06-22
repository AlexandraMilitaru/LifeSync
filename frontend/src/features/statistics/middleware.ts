import { reset } from './slice';
import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';
import { StatisticsFunctionality } from './constants';

// sa vad poate rezolv fara any aici
const statisticsMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        case "statistics/timeSpentPerDay/fulfilled":
        case "statistics/timeSpentPerDay/rejected":
            store.dispatch(reset(StatisticsFunctionality.GetTimeSpentPerDay));
            break;
        case "statistics/totalExpensesPerMonth/fulfilled":
        case "statistics/totalExpensesPerMonth/rejected":
            store.dispatch(reset(StatisticsFunctionality.GetTotalExpensesPerMonth));
            break;
        case "statistics/numberOfEventsPerCategory/fulfilled":
        case "statistics/numberOfEventsPerCategory/rejected":
            store.dispatch(reset(StatisticsFunctionality.GetNumberOfEventsPerCategory));
            break;
        default:
            break;
    }

    return result;
};

export default statisticsMiddleware;