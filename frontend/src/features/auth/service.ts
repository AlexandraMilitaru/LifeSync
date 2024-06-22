import RequestUtils from '../../utils/request-utils';
import {
    LoginRequestPayload,
    RegisterRequestPayload,
    ActivateRequestPayload,
    ResetPasswordRequestPayload,
    ForgotPasswordRequestPayload,
} from './types';

const AUTH_API_BASE_URL = '/auth';

const register = async (requestPayload: RegisterRequestPayload) => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/register`, requestPayload);
}

const activate = async (requestPayload: ActivateRequestPayload) => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/activate`, requestPayload);
}

const login = async (requestPayload: LoginRequestPayload) => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/login`, requestPayload);
}

const user = async () => {
    return RequestUtils.get(`${AUTH_API_BASE_URL}/user`);
}

const forgotPassword = async (requestPayload: ForgotPasswordRequestPayload) => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/forgot-password`, requestPayload);
}

const resetPassword = async (requestPayload: ResetPasswordRequestPayload) => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/reset-password`, requestPayload);
}

const logout = async () => {
    return RequestUtils.post(`${AUTH_API_BASE_URL}/logout`);
}

export const authService = {
    register,
    activate,
    login,
    user,
    logout,
    forgotPassword,
    resetPassword
}