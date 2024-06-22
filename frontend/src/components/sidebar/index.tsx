
import { Url } from "../../enums/url-enum";
import { Role } from "../../enums/role-enum";
import { useAppSelector } from "../../store";
import {
    LogoIcon,
    LogoText,
    MenuList,
    MenuItem,
    MenuLink,
    LogoLink,
    LogoContainer,
    MainContainer,
    MenuContainer
} from "./styles";

const menus = {
    member: [
        {
            to: Url.Events,
            text: 'Events'
        },
        {
            to: Url.CreateEvent,
            text: 'Create event'
        },
        {
            to: Url.Statistics,
            text: 'Statistics'
        }
    ],
    guest: [
        {
            to: Url.Register,
            text: 'Register'
        },
        {
            to: Url.Login,
            text: 'Login'
        },
        {
            to: Url.ForgotPassword,
            text: 'Forgot password'
        }
    ],
}

function Sidebar() {
    const user = useAppSelector(state => state.auth.user);

    const renderMenu = () => {
        if (!user) return menus.guest;

        switch (user.role.name) {
            case Role.Member:
                return menus.member;
            default:
                return [];
        }
    }

    return (
        <MainContainer>
            <LogoContainer>
                <LogoLink to={Url.Home}>
                    <LogoIcon />
                    <LogoText>LifeSync</LogoText>
                </LogoLink>
            </LogoContainer>
            <MenuContainer>
                <MenuList>
                    {
                        renderMenu().map(({ to, text }) => (
                            <MenuItem key={text}>
                                <MenuLink to={to}>{text}</MenuLink>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </MenuContainer>
        </MainContainer>
    )
}

export default Sidebar;