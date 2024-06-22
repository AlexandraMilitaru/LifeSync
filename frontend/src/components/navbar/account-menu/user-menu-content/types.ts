import { User } from "../../../../types/user-types";

export interface UserMenuContentProps {
    user: Omit<User, 'password'>;
    handleCloseMenu: () => void;
}