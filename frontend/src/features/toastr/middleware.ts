import { actions } from './constants';
import { RootState } from '../../store';
import { showToastr } from './slice';
import { Middleware } from '@reduxjs/toolkit';

// sa vad poate rezolv fara any aici
const toastrMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    if (actions.includes(action.type)) {
        store.dispatch(showToastr({
            message: action.payload.message,
            severity: action.payload.severity
        }));
    }

    return result;
};

export default toastrMiddleware;