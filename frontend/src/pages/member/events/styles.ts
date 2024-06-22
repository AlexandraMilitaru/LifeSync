import { styled } from '@mui/material/styles';
import { CreateEventButtonProps } from './types';
import {
    Button,
    TextField,
    IconButton
} from '@mui/material';

export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    gap: '16px',
    padding: '32px 24px'
})

export const TopContainer = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'center',
});

export const InputFieldWrapper = styled('div')({
    position: 'relative',
});

export const InputField = styled(TextField)({
    backgroundColor: '#fff',
    width: '300px'
});

export const SearchIconButton = styled(IconButton)({
    position: 'absolute',
    right: '4px',
});

export const CreateEventButton = styled(Button)<CreateEventButtonProps>({
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 24px',
    fontSize: '11px',
    border: 'none',
    cursor: 'pointer'
});

export const InnerContainer = styled('div')({
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)",
    gap: '24px'
});

export const CurrentMonthTitle = styled('h2')({
    fontSize: '20px'
});

export const DaysCarousel = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
});

export const DayCard = styled('div')({
    borderRadius: "50%",
    width: '64px',
    height: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    color: '#000',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s',
    "&:hover": {
        transform: 'scale(1.1)',
    }
});

export const DayText = styled('span')({
    fontSize: '14px'
});

export const DayNumber = styled('span')({
    fontSize: '14px'
});

export const CurrentDateContainer = styled('div')({
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center'
});

export const CurrentDateText = styled('span')({
    fontSize: '16px'
});

export const EventsContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
});