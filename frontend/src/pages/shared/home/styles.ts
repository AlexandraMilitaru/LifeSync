import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const Main = styled('main')({
    height: '100%',
    backgroundColor: '#f2f2f2',
    display: "flex",
    justifyContent: "center",
    padding: '32px 24px',
    borderRadius: '16px'
})

export const Wrapper = styled("div")({
    width: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderRadius: "8px",
    boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.3)',
})

export const Title = styled("h1")({
});

export const Subtitle = styled("h4")({
    lineHeight: '1.5',
    textAlign: "center"
});

export const LinksContainer = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
});

export const RouteLink = styled(Link)({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #000",
    width: "150px",
    height: "32px",
    color: "#000",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "600",
    position: "relative",
    transition: " color 500ms ease-in-out",
    zIndex: 0,
    ':before': {
        content: '""',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: '-1',
        backgroundColor: '#000',
        transition: 'transform 500ms ease-in-out',
        transform: 'scaleX(0)'
    },
    ':hover': {
        color: '#fff',
        cursor: 'pointer'
    },
    ':hover:before': {
        transform: 'scaleX(1)'
    }
})

export const RegisterLink = styled(RouteLink)({
    ":before": {
        transformOrigin: "left"
    }
})

export const LoginLink = styled(RouteLink)({
    ":before": {
        transformOrigin: "right"
    }
})