import { User } from "../../types/user-types";
import { ImgHTMLAttributes } from "react";
import { AvatarProps as MuiAvatarProps } from "@mui/material";

export interface AvatarProps extends MuiAvatarProps {
    width: number,
    height: number
}

export interface AccountAvatarProps {
    user?: Omit<User, 'password'> | null,
    size: number,
    imgProps?: ImgHTMLAttributes<HTMLImageElement>
}