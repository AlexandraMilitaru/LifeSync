import { Avatar } from "../styles";
import { GuestAvatarProps } from "./types";

function GuestAvatar(props: GuestAvatarProps) {
    const { size } = props;

    return (
        <Avatar
            width={size}
            height={size}
        >
            G
        </Avatar>
    )
}

export default GuestAvatar;