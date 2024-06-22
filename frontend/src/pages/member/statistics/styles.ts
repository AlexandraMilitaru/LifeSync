import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '32px',
    padding: '32px 24px'
})

export const Title = styled('h2')({
});

export const ChartWrapper = styled('div')({
    backgroundColor: '#fff',
    width: '100%',
    height: '500px',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
});