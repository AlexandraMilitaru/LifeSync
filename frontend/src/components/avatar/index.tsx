import { AvatarProps } from "./types";
import { Avatar as MuiAvatar } from "@mui/material";

function Avatar(props: AvatarProps) {
    const { size, name, imageUri, showFullName } = props;

    return (
        <MuiAvatar alt={`${name} avatar`} src={imageUri || undefined} sx={{ width: size, height: size }}>
            {showFullName ? name : name[0]}
        </MuiAvatar>
    )
}

export default Avatar;