
import { Link } from '../../../../styles/shared/styles';
import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    borderRadius: '8px',
    gap: '15px',
});

export const Title = styled(Link)({
    color: '#000',
    fontSize: '24px',
    fontWeight: '900',
    position: 'relative'
});

export const UnderlineEffect = styled('span')({
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    height: '4px',
    width: '100%',
    backgroundColor: '#000',
    borderRadius: '8px',
});
export const DateContainer = styled('div')({
    marginTop: '5px'
});

export const SpentContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

export const SpentText = styled('p')({
});

export const SpentValue = styled('p')({
});

export const Description = styled('p')({
});

export const InnerContainer = styled('div')({
    width: '100%',
    display: 'flex',
    gap: '10px'
});

export const ImagesContainer = styled('div')({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    gap: '10px'
});

export const ImageWrapper = styled('div')({
    height: 'calc(100% - 100px - 10px)'
});

export const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

export const GalleryContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
});

export const GalleryImage = styled(Image)({
    width: '100%',
    height: '100px',
    objectFit: 'cover'
});

export const MapWrapper = styled('div')({
    flex: '1',
    height: '400px'
});