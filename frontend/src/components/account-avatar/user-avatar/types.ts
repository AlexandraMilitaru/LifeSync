import { User } from '../../../types/user-types';
import { AvatarProps } from '@mui/material/Avatar';

export interface UserAvatarProps extends AvatarProps {
    user: Omit<User, 'password'>,
    size: number
}