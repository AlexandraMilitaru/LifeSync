import initialState from './state';
import { Status } from '../../enums/status-enum';
import { RootState } from '../../store';
import { AuthFunctionality } from './constants';
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    login,
    logout,
    register,
    activate,
    resetPassword,
    forgotPassword
} from './thunks';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state, { payload }: PayloadAction<AuthFunctionality>) => {
            state.statuses[payload] = Status.Idle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.statuses.register = Status.Pending;
            })
            .addCase(register.fulfilled, (state) => {
                state.statuses.register = Status.Fulfilled;
            })
            .addCase(register.rejected, (state) => {
                state.statuses.register = Status.Rejected;
            })
            .addCase(activate.pending, (state) => {
                state.statuses.activate = Status.Pending;
            })
            .addCase(activate.fulfilled, (state) => {
                state.statuses.activate = Status.Fulfilled;
            })
            .addCase(activate.rejected, (state) => {
                state.statuses.activate = Status.Rejected;
            })
            .addCase(login.pending, (state) => {
                state.statuses.login = Status.Pending;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.statuses.login = Status.Fulfilled;
                state.user = payload.user;
            })
            .addCase(login.rejected, (state) => {
                state.statuses.login = Status.Rejected;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.statuses.forgotPassword = Status.Pending;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.statuses.forgotPassword = Status.Fulfilled;
            })
            .addCase(forgotPassword.rejected, (state) => {
                state.statuses.forgotPassword = Status.Rejected;
            })
            .addCase(resetPassword.pending, (state) => {
                state.statuses.resetPassword = Status.Pending;
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.statuses.resetPassword = Status.Fulfilled;
            })
            .addCase(resetPassword.rejected, (state) => {
                state.statuses.resetPassword = Status.Rejected;
            })
            .addCase(logout.pending, (state) => {
                state.statuses.logout = Status.Pending;
            })
            .addCase(logout.fulfilled, (state) => {
                state.statuses.logout = Status.Fulfilled;
                state.user = null;
            })
            .addCase(logout.rejected, (state) => {
                state.statuses.logout = Status.Rejected;
            });
    }
})

export const selectStatusByFunctionality = (state: RootState, functionality: AuthFunctionality) => state.auth.statuses[functionality]

export const { reset } = authSlice.actions;
export default authSlice.reducer;