import { Url } from '../../enums/url-enum';
import { reset } from './slice';
import { navigate } from '../navigation/slice';
import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';
import { EventsFunctionality } from './constants';

// sa vad poate rezolv fara any aici
const eventsMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        case "events/create/fulfilled":
            store.dispatch(reset(EventsFunctionality.Create));
            store.dispatch(navigate({ url: Url.Events }))
            break;
        case "events/create/rejected":
            store.dispatch(reset(EventsFunctionality.Create));
            break;
        default:
            break;
    }

    return result;
};

export default eventsMiddleware;