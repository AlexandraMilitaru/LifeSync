import RequestUtils from '../../utils/request-utils';
import {
    CreateRequestPayload,
    GetByIdRequestPayload,
    GetAllByDateRequestPayload
} from './types';

const EVENTS_API_BASE_URL = '/api/events';

const create = async (requestPayload: CreateRequestPayload) => {
    return RequestUtils.post(`${EVENTS_API_BASE_URL}`, requestPayload);
}

const getById = async (requestPayload: GetByIdRequestPayload) => {
    const { id } = requestPayload;
    return RequestUtils.get(`${EVENTS_API_BASE_URL}/${id}`);
}

const getAllByDate = async (requestPayload: GetAllByDateRequestPayload) => {
    const { date } = requestPayload;
    return RequestUtils.get(`${EVENTS_API_BASE_URL}/date/${date}`);
}

export const eventsService = {
    create,
    getById,
    getAllByDate
}