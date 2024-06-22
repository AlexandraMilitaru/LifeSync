import { Link } from "../../styles/shared/styles";
import { styled } from "@mui/material/styles";
import { MdEventAvailable } from "react-icons/md";

export const MainContainer = styled("aside")({
    flex: "0 0 250px",
    backgroundColor: "#fff",
    borderRadius: '16px'
});

export const LogoContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #E8ECEF",
    gap: "8px",
    height: "calc(40px + 32px)"
});

export const LogoLink = styled(Link)({
    display: "flex",
    alignItems: "center",
    color: "#000"
});

export const LogoIcon = styled(MdEventAvailable)({
    fontSize: "28px"
});

export const LogoText = styled("h1")({
});

export const MenuContainer = styled("nav")({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px"
});

export const MenuList = styled("ul")({
    listStyleType: "none",
});

export const MenuItem = styled("li")({
});

export const MenuLink = styled(Link)({
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    display: "block",
    padding: "10px",
    borderRadius: "10px",
    transition: "background-color 0.3s",
    "&:hover": {
        backgroundColor: "#E8ECEF"
    }
});