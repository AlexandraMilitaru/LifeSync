import AccountMenu from "./account-menu";
import AccountAvatar from "../account-avatar";
import { useAppSelector } from "../../store";
import {
    useState,
    MouseEvent
} from "react";
import {
    Tooltip,
    IconButton
} from "@mui/material";
import {
    PageName,
    MainContainer,
    IconButtonWrapper,
    IconButtonsContainer
} from "./styles";

function Navbar() {
    const user = useAppSelector(state => state.auth.user);

    const page = useAppSelector(state => state.router.page);

    const [openAccountMenu, setOpenAccountMenu] = useState(false);

    const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null);

    const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
        setOpenAccountMenu(true);
    }

    const handleCloseMenu = () => {
        setAnchorElement(null);
        setOpenAccountMenu(false);
    }

    return (
        <MainContainer>
            <PageName>
                {page}
            </PageName>
            <IconButtonsContainer>
                <IconButtonWrapper>
                    <Tooltip arrow title='Profil utilizator'>
                        <IconButton
                            size='small'
                            edge='end'
                            color='inherit'
                            onClick={(event: MouseEvent<HTMLButtonElement>) => handleOpenMenu(event)}
                        >
                            <AccountAvatar
                                user={user}
                                size={50}
                            />
                        </IconButton>
                    </Tooltip>
                    <AccountMenu
                        user={user}
                        isOpen={openAccountMenu}
                        anchorElement={anchorElement}
                        handleCloseMenu={() => handleCloseMenu()}
                    />
                </IconButtonWrapper>
            </IconButtonsContainer>
        </MainContainer>
    );
}

export default Navbar;