import { reset } from './slice';
import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';
import { CategoriesFunctionality } from './constants';

// sa vad poate rezolv fara any aici
const categoriesMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        case "categories/getAll/fulfilled":
        case "categories/getAll/rejected":
            store.dispatch(reset(CategoriesFunctionality.GetAll));
            break;
        default:
            break;
    }

    return result;
};

export default categoriesMiddleware;