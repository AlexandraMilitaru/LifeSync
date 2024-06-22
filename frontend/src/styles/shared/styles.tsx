import { styled } from "@mui/material/styles"
import { LoadingButtonProps } from "./types"
import { Link as RouterLink } from "react-router-dom"
import { LoadingButton as MuiLoadingButton } from "@mui/lab"

export const Link = styled(RouterLink)({
    textDecoration: 'none'
})

export const LoadingButton = styled(({ indicatorColor, backgroundColor, ...props }: LoadingButtonProps) => (
    <MuiLoadingButton loading={props.loading ?? true} loadingPosition="center" variant="outlined" {...props} />
))(({ indicatorColor, backgroundColor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    backgroundColor: backgroundColor || 'rgba(200, 200, 200, 0.6)',
    fontSize: '12px',
    border: '0',
    gap: '10px',
    '&.Mui-disabled': {
        color: '#001528'
    },
    '& .MuiLoadingButton-loadingIndicator': {
        color: indicatorColor || '#001528'
    }
}));