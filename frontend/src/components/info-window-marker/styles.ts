import { styled } from '@mui/material/styles';

export const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
});

export const Title = styled('h3')({
});

export const Text = styled('p')({
});

export const MarkerImage = styled('img')({
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    border: '2px solid #000',
});