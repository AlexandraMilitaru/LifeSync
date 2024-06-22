import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100vh",
    backgroundColor: theme.palette.colors.darkGrey,
    padding: "16px",
    gap: "16px"
}));

export const InnerContainer = styled("div")({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
});

export const ContentWrapper = styled("main")(({ theme }) => ({
    backgroundColor: theme.palette.colors.lightGrey,
    borderRadius: "20px",
    flex: "1"
}));