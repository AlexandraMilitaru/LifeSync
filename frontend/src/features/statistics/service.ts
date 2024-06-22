import RequestUtils from '../../utils/request-utils';

const STATISTICS_API_BASE_URL = '/api/statistics';

const getTimeSpentPerDay = async () => {
    return RequestUtils.get(`${STATISTICS_API_BASE_URL}/get-time-spent-per-day`);
}

const getTotalExpensesPerMonth = async () => {
    return RequestUtils.get(`${STATISTICS_API_BASE_URL}/get-total-expenses-per-month`);
}

const getNumberOfEventsPerCategory = async () => {
    return RequestUtils.get(`${STATISTICS_API_BASE_URL}/get-number-of-events-per-category`);
}

export const statisticsService = {
    getTimeSpentPerDay,
    getTotalExpensesPerMonth,
    getNumberOfEventsPerCategory
}