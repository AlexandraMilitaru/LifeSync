import { styled } from "@mui/material/styles";
import MuiCircularProgress from "@mui/material/CircularProgress";

interface ICircularProgressProps {
    customColor?: string
}

export const CircularProgress = styled(MuiCircularProgress, {
    shouldForwardProp: (prop) => prop !== 'customColor',
})<ICircularProgressProps>(({ theme, customColor }) => ({
    color: customColor ?? theme.palette.primary.main
}));