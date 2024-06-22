import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';

// sa vad poate rezolv fara any aici
const navigationMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        default:
            break;
    }

    return result;
};

export default navigationMiddleware;