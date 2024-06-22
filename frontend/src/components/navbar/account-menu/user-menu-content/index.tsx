import UserAvatar from '../../../account-avatar/user-avatar';
import AccountMenuItem from '../account-menu-item';
import { Url } from '../../../../enums/url-enum';
import { Divider } from '@mui/material';
import { GoSignOut } from "react-icons/go";
import { RiProfileLine } from "react-icons/ri";
import { UserMenuContentProps } from './types';
import {
    MdOutlineSecurity,
    MdOutlineMailLock
} from "react-icons/md";
import {
    Email,
    MenuItem,
    FullName,
    UserDetails,
} from './styles';

function UserMenuContent(props: UserMenuContentProps) {
    const { user, handleCloseMenu } = props;

    const { email, firstName, lastName } = user;

    return (
        <>
            <MenuItem>
                <UserAvatar user={user} size={40} />
                <UserDetails >
                    <FullName>
                        {`${lastName} ${firstName}`}
                    </FullName>
                    <Email>
                        {email}
                    </Email>
                </UserDetails>
            </MenuItem>
            <Divider />
            {/* <AccountMenuItem
                to={Url.AccountDetails}
                onClick={handleCloseMenu}
                icon={<RiProfileLine fontSize='small' />}
                text='Account details'
            />
            <AccountMenuItem
                to={Url.ChangeEmail}
                onClick={handleCloseMenu}
                icon={<MdOutlineMailLock fontSize='small' />}
                text='Change email'
            />
            <AccountMenuItem
                to={Url.ChangePassword}
                onClick={handleCloseMenu}
                icon={<MdOutlineSecurity fontSize='small' />}
                text='Change password'
            />
            <Divider /> */}
            <AccountMenuItem
                to={`${Url.Logout}`}
                onClick={handleCloseMenu}
                icon={<GoSignOut fontSize='small' />}
                text='Logout'
            />
        </>
    )
}

export default UserMenuContent;