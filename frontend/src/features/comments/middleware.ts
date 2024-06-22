import { reset } from './slice';
import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';
import { CommentsFunctionality } from './constants';

// sa vad poate rezolv fara any aici
const commentsMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        case "comments/add/rejected":
            store.dispatch(reset(CommentsFunctionality.Add));
            break;
        default:
            break;
    }

    return result;
};

export default commentsMiddleware;