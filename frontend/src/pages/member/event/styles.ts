import { styled } from '@mui/material/styles'

export const MainContainer = styled('div')({
    minHeight: 'calc(100vh - 64px - 64px)',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 24px',
    gap: '24px'
});


export const TopMainContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '16px'
});

export const TopInnerContainer = styled('div')({
    width: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
})

export const Title = styled('h2')({
});

export const HostedContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
});

export const AvatarWrapper = styled('div')({
});

export const NameContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

export const HostedByText = styled('span')({
});

export const HostedBy = styled('span')({
    fontWeight: '900'
});

export const BottomMainContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center'
});

export const BottomInnerContainer = styled('div')({
    width: '1200px',
    display: 'flex',
    gap: '32px'
});

export const DetailsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: '1 1 0'
});

export const EventImageWrapper = styled('div')({
    width: '100%'
});

export const EventImage = styled('img')({
    width: '100%',
    objectFit: 'cover'
});

export const Description = styled('p')({
});

export const AttendeesContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
});

export const AttendeesTitle = styled('h3')({
});

export const CardsContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))',
    gap: '16px',
    backgroundColor: "#fff",
    padding: "16px"
});

export const AttendeeCard = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "8px",
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: "16px",
    borderRadius: "8px"
}))

export const AttendeeImage = styled('img')({
});

export const AttendeeName = styled('span')({
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "700",
});

export const AttendMore = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: "14px",
    fontWeight: "700"
}))

export const AttendeeRole = styled('span')({
    fontSize: "12px",
    color: "#707070"
});

export const PhotosContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
});

export const PhotosTitle = styled('h3')({
});

export const Photo = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

export const InfoContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 350px'
});

export const DateContainer = styled('div')({
    backgroundColor: '#fff',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
});

export const Date = styled('span')({
});

export const LocationContainer = styled('div')({
    backgroundColor: '#fff',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
});

export const Location = styled('span')({
});

export const MapWrapper = styled('div')({
    width: '100%',
    height: '300px',
});

export const CommentsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center'
});