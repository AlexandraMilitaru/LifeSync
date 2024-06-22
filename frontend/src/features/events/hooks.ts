import { Status } from '../../enums/status-enum';
import { useEffect } from 'react';
import { EventsFunctionality } from './constants';
import { selectStatusByFunctionality } from './slice';
import {
    getAllEvents,
    getEventById
} from './thunks';
import {
    useAppDispatch,
    useAppSelector
} from '../../store';

const useEventsStatus = (eventsFunc: EventsFunctionality) => {
    const status = useAppSelector((state) => selectStatusByFunctionality(state, eventsFunc));

    const isIdle = status === Status.Idle;
    const isError = status === Status.Rejected;
    const isLoading = status === Status.Pending;
    const isSuccess = status === Status.Fulfilled;

    return { isIdle, isLoading, isError, isSuccess };
};

export const useGetAllEvents = (date: Date) => {
    const dispatch = useAppDispatch();

    const { events } = useAppSelector((state) => state.events);

    useEffect(() => {
        dispatch(getAllEvents({ date }));
    }, [date, dispatch]);

    return { events, ...useEventsStatus(EventsFunctionality.GetAll) };
}

export const useGetEventById = (id: string | undefined) => {
    const dispatch = useAppDispatch();

    const { event } = useAppSelector((state) => state.events);

    useEffect(() => {
        id && dispatch(getEventById({ id }));
    }, [id, dispatch]);

    return { event, ...useEventsStatus(EventsFunctionality.GetById) };
}