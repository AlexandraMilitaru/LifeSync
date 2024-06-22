import AccountMenuItem from '../account-menu-item';
import { Url } from '../../../../enums/url-enum';
import { Divider } from '@mui/material';
import { GoSignOut } from "react-icons/go";
import { RiProfileLine } from "react-icons/ri";
import { GuestMenuContentProps } from './types';
import {
    MdOutlineSecurity,
    MdOutlineMailLock
} from "react-icons/md";
import {
    Name,
    Avatar,
    MenuItem,
    UserDetails,
} from './styles';

function GuestMenuContent(props: GuestMenuContentProps) {
    const { handleCloseMenu } = props;

    return (
        <>
            <MenuItem>
                <Avatar
                    width={40}
                    height={40}
                >
                    G
                </Avatar>
                <UserDetails>
                    <Name>
                        Guest
                    </Name>
                </UserDetails>
            </MenuItem>
            <Divider />
            <AccountMenuItem
                to={Url.Register}
                onClick={handleCloseMenu}
                icon={<RiProfileLine fontSize='small' />}
                text='Register'
            />
            <AccountMenuItem
                to={Url.Login}
                onClick={handleCloseMenu}
                icon={<MdOutlineMailLock fontSize='small' />}
                text='Login'
            />
            <AccountMenuItem
                to={Url.ForgotPassword}
                onClick={handleCloseMenu}
                icon={<MdOutlineSecurity fontSize='small' />}
                text='Forgot password'
            />
            <Divider />
            <AccountMenuItem
                to={`${Url.Logout}`}
                onClick={handleCloseMenu}
                icon={<GoSignOut fontSize='small' />}
                text='Logout'
            />
        </>
    )
}

export default GuestMenuContent;