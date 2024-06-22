import { styled } from '@mui/material/styles';

export const Main = styled('main')(({ theme }) => ({
    background: `linear-gradient(-90deg,${theme.palette.primary.main},${theme.palette.primary.dark})`
}))

export const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
})