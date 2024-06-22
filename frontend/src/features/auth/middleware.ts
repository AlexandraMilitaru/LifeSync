import { Url } from '../../enums/url-enum';
import { reset } from './slice';
import { navigate } from '../navigation/slice';
import { RootState } from '../../store';
import { Middleware } from '@reduxjs/toolkit';
import { AuthFunctionality } from './constants';

// sa vad poate rezolv fara any aici
const authMiddleware: Middleware<{}, RootState> = store => next => (action: any) => {
    const result = next(action);

    switch (action.type) {
        case "auth/register/fulfilled":
        case "auth/register/rejected":
            store.dispatch(reset(AuthFunctionality.Register));
            break;
        case "auth/activate/fulfilled":
        case "auth/activate/rejected":
            store.dispatch(reset(AuthFunctionality.Activate));
            break;
        case "auth/login/fulfilled":
            store.dispatch(reset(AuthFunctionality.Login));
            store.dispatch(navigate({ url: Url.Home }));
            break;
        case "auth/login/rejected":
            store.dispatch(reset(AuthFunctionality.Login));
            break;
        case "auth/logout/fulfilled":
            store.dispatch(reset(AuthFunctionality.Logout));
            store.dispatch(navigate({ url: Url.Login }));
            break;
        case "auth/logout/rejected":
            store.dispatch(reset(AuthFunctionality.Logout));
            break;
        default:
            break;
    }

    return result;
};

export default authMiddleware;