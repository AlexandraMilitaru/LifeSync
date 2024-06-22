import { User } from "../../../types/user-types";

export interface AccountMenuProps {
    user: Omit<User, 'password'> | null;
    isOpen: boolean;
    anchorElement: HTMLButtonElement | null;
    handleCloseMenu: () => void;
}