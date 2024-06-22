import LocalStorageUtils from '../../utils/local-storage-utils';
import { authService } from './service';
import { ResponseError } from '../../types/features-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    LoginRequestPayload,
    LoginResponsePayload,
    LogoutResponsePayload,
    ActivateRequestPayload,
    RegisterRequestPayload,
    ActivateResponsePayload,
    RegisterResponsePayload,
    ResetPasswordRequestPayload,
    ForgotPasswordRequestPayload,
    ResetPasswordResponsePayload,
    ForgotPasswordResponsePayload,
} from './types';

export const register = createAsyncThunk<
    RegisterResponsePayload,
    RegisterRequestPayload,
    { rejectValue: ResponseError }
>(
    'auth/register',
    async (requestPayload: RegisterRequestPayload, { rejectWithValue }) => {
        const response = await authService.register(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)

export const activate = createAsyncThunk<
    ActivateResponsePayload,
    ActivateRequestPayload,
    { rejectValue: ResponseError }
>(
    'auth/activate',
    async (requestPayload: ActivateRequestPayload, { rejectWithValue }) => {
        const response = await authService.activate(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)

export const login = createAsyncThunk<
    LoginResponsePayload,
    LoginRequestPayload,
    { rejectValue: ResponseError }
>(
    'auth/login',
    async (requestPayload: LoginRequestPayload, { rejectWithValue }) => {
        const responseLogin = await authService.login(requestPayload);
        const responseLoginPayload = await responseLogin.json();

        if (responseLogin.status < 200 || responseLogin.status >= 300) {
            return rejectWithValue(responseLoginPayload as ResponseError);
        }

        const responseUser = await authService.user();
        const responseUserPayload = await responseUser.json();

        if (responseUser.status < 200 || responseUser.status >= 300) {
            return rejectWithValue(responseUserPayload as ResponseError);
        }

        LocalStorageUtils.setItem('user', { ...responseUserPayload });

        return {
            ...responseLoginPayload,
            user: responseUserPayload
        };
    }
)

export const logout = createAsyncThunk<
    LogoutResponsePayload,
    void,
    { rejectValue: ResponseError }
>(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        const response = await authService.logout();

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        localStorage.removeItem('user');

        return responsePayload;
    }
)

export const forgotPassword = createAsyncThunk<
    ForgotPasswordResponsePayload,
    ForgotPasswordRequestPayload,
    { rejectValue: ResponseError }
>(
    'auth/forgotPassword',
    async (requestPayload: ForgotPasswordRequestPayload, { rejectWithValue }) => {
        const response = await authService.forgotPassword(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)

export const resetPassword = createAsyncThunk<
    ResetPasswordResponsePayload,
    ResetPasswordRequestPayload,
    { rejectValue: ResponseError }
>(
    'auth/resetPassword',
    async (requestPayload: ResetPasswordRequestPayload, { rejectWithValue }) => {
        const response = await authService.resetPassword(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload as ResponseError);
        }

        return responsePayload;
    }
)