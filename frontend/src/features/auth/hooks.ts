import { Status } from '../../enums/status-enum';
import { useEffect } from 'react';
import { AuthFunctionality } from './constants';
import { selectStatusByFunctionality } from './slice';
import {
    logout,
    activate
} from './thunks';
import {
    useAppDispatch,
    useAppSelector
} from '../../store';

const useAuthStatus = (authFunc: AuthFunctionality) => {
    const status = useAppSelector((state) => selectStatusByFunctionality(state, authFunc));

    const isIdle = status === Status.Idle;
    const isError = status === Status.Rejected;
    const isLoading = status === Status.Pending;
    const isSuccess = status === Status.Fulfilled;

    return { isIdle, isLoading, isError, isSuccess };
};

export const useRegisterHook = () => useAuthStatus(AuthFunctionality.Register);

export const useActivateHook = (token: string | null) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (token) {
            dispatch(activate({ token }));
        }
    }, [token]);

    return useAuthStatus(AuthFunctionality.Activate);
}

export const useLoginHook = () => useAuthStatus(AuthFunctionality.Login);

export const useLogoutHook = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(logout());
    }, []);

    return useAuthStatus(AuthFunctionality.Logout);
}