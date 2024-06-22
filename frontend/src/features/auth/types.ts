import { Status } from "../../enums/status-enum"
import { Message } from "../../types/features-types"
import { UserDetails } from "../../types/user-types"
import { AuthFunctionality } from "./constants"

export interface AuthState {
    user: Omit<UserDetails, 'password'> | null,
    statuses: Record<AuthFunctionality, Status>
}

export interface RegisterRequestPayload {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface LoginRequestPayload {
    email: string;
    password: string;
}

export interface ActivateRequestPayload {
    token: string
}

export interface ForgotPasswordRequestPayload {
    email: string
}

export interface ResetPasswordRequestPayload {
    token: string,
    newPassword: string
}
export interface RegisterResponsePayload extends Message {
}

export interface LoginResponsePayload extends Message {
    user: Omit<User, 'password'>
}

export interface ActivateResponsePayload extends Message {
}

export interface ForgotPasswordResponsePayload extends Message {
}

export interface ResetPasswordResponsePayload extends Message {
}

export interface LogoutResponsePayload extends Message {
}