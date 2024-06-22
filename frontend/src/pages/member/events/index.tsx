import Loading from "../../../components/loading";
import EventCard from "../../../components/member/events/card";
import { Url } from "../../../enums/url-enum";
import { Link } from "react-router-dom";
import { setPage } from "../../../features/router/slice";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { useGetAllEvents } from "../../../features/events/hooks";
import {
    useState,
    useEffect
} from "react";
import {
    FaSearch,
    FaCalendar,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import {
    DayCard,
    DayText,
    DayNumber,
    InputField,
    DaysCarousel,
    TopContainer,
    MainContainer,
    InnerContainer,
    EventsContainer,
    CurrentDateText,
    SearchIconButton,
    CurrentMonthTitle,
    CreateEventButton,
    InputFieldWrapper,
    CurrentDateContainer
} from "./styles";

function Events() {
    const dispatch = useAppDispatch();

    const [currentDate, setCurrentDate] = useState(new Date());

    const { events, isLoading } = useGetAllEvents(currentDate);

    console.log(events)

    const handleClickPreviousDate = () => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - 7);
        setCurrentDate(date);
    }

    const handleClickNextDate = () => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + 7);
        setCurrentDate(date);
    }

    const handleClickDate = (date: Date) => {
        setCurrentDate(date);
    }

    useEffect(() => {
        dispatch(setPage('Events'));
    }, [])

    if (isLoading) {
        return <Loading isLoading={isLoading} />
    }

    return (
        <MainContainer>
            <TopContainer>
                {/* <InputFieldWrapper>
                    <InputField size="small" placeholder="Search an event..." />
                    <SearchIconButton>
                        <FaSearch />
                    </SearchIconButton>
                </InputFieldWrapper> */}
                <CreateEventButton variant="contained" component={Link} to={Url.CreateEvent}>
                    Create event
                </CreateEventButton>
            </TopContainer>
            <InnerContainer>
                <CurrentMonthTitle>
                    {currentDate.toLocaleString('default', { month: 'long' })}
                </CurrentMonthTitle>
                <DaysCarousel>
                    <IconButton size="small" onClick={handleClickPreviousDate}>
                        <FaChevronLeft />
                    </IconButton>
                    {
                        Array.from({ length: 7 }).map((_, index) => {
                            const date = new Date(currentDate);
                            date.setDate(currentDate.getDate() + index);

                            return (
                                <DayCard key={index} onClick={() => handleClickDate(date)}>
                                    <DayText>
                                        {date.toLocaleString('default', { weekday: 'short' })}
                                    </DayText>
                                    <DayNumber>
                                        {date.getDate()}
                                    </DayNumber>
                                </DayCard>
                            );
                        })
                    }
                    <IconButton size="small" onClick={handleClickNextDate}>
                        <FaChevronRight />
                    </IconButton>
                </DaysCarousel>
                <CurrentDateContainer>
                    <FaCalendar />
                    <CurrentDateText>{currentDate.toDateString()}</CurrentDateText>
                </CurrentDateContainer>
                <EventsContainer>
                    {
                        events.map((event) => (
                            <EventCard key={event.id} {...event} />
                        ))
                    }
                </EventsContainer>
            </InnerContainer>
        </MainContainer>
    );
}

export default Events;