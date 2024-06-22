import { User } from "@prisma/client";
import { PendingMemberCreateServiceDto } from "./pending-member-types";

export type RegisterDto = PendingMemberCreateServiceDto;
export type ActivateDto = { token: string; };
export type LoginDto = Pick<User, "email" | "password">;
export type ForgotPasswordDto = Pick<User, "email">;
export type ResetPasswordDto = Pick<User, "password"> & { newPassword: string; };
export type ChangeEmailDto = { newEmail: string; };
export type ChangePasswordDto = Pick<User, "password"> & { newPassword: string; };
export type ConfirmChangeEmailDto = { token: string; };
export type ConfirmResetPasswordDto = { token: string; };