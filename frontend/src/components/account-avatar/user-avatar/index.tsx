import { Avatar } from "../styles";
import { UserAvatarProps } from "./types";

function UserAvatar(props: UserAvatarProps) {
    const { user, size } = props;

    const { firstName, lastName, avatarUri } = user;

    return (
        <Avatar
            alt={`${lastName} ${firstName}`}
            src={avatarUri ? avatarUri : undefined}
            width={size}
            height={size}
        >
            {lastName[0]}
        </Avatar>
    )
}

export default UserAvatar;