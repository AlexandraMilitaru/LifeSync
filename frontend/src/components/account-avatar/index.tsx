import UserAvatar from "./user-avatar";
import GuestAvatar from "./guest-avatar";
import { AccountAvatarProps } from "./types";

function AccountAvatar(props: AccountAvatarProps) {
    const { user, size } = props;

    return (
        <>
            {
                user
                    ? <UserAvatar user={user} size={size} />
                    : <GuestAvatar size={size} />
            }
        </>
    )
}

export default AccountAvatar;