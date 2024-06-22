import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { AvatarProps } from './types';

export const Avatar = styled(MuiAvatar)<AvatarProps>(({ width, height }) => ({
    width: `${width}px`,
    height: `${height}px`
}));