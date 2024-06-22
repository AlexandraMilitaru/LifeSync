import { Status } from '../../enums/status-enum';
import { useEffect } from 'react';
import { getEventById } from '../events/thunks';
import { CommentsFunctionality } from './constants';
import { selectStatusByFunctionality } from './slice';
import {
    useAppDispatch,
    useAppSelector
} from '../../store';

const useCommentsStatus = (commentsFunc: CommentsFunctionality) => {
    const status = useAppSelector((state) => selectStatusByFunctionality(state, commentsFunc));

    const isIdle = status === Status.Idle;
    const isError = status === Status.Rejected;
    const isLoading = status === Status.Pending;
    const isSuccess = status === Status.Fulfilled;

    return { isIdle, isLoading, isError, isSuccess };
};

export const useAddComment = (eventId: string | undefined) => {
    const dispatch = useAppDispatch();

    const { isSuccess } = useCommentsStatus(CommentsFunctionality.Add);

    useEffect(() => {
        eventId && isSuccess && dispatch(getEventById({ id: eventId }));
    }, [dispatch, eventId, isSuccess]);
}