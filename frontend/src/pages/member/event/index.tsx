import Avatar from "../../../components/avatar";
import EventMap from "../../../components/event/map";
import Comments from "../../../components/event/comments";
import DateUtils from "../../../utils/date-utils";
import { Url } from "../../../enums/url-enum";
import { setPage } from "../../../features/router/slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryIcon } from "../../../constants/category-constants";
import { useAppDispatch } from "../../../store";
import { useGetEventById } from "../../../features/events/hooks";
import {
    FaClock,
    FaLocationDot
} from "react-icons/fa6";
import {
    Date,
    Title,
    Photo,
    HostedBy,
    Location,
    MapWrapper,
    EventImage,
    AttendMore,
    Description,
    PhotosTitle,
    AttendeeName,
    AttendeeRole,
    HostedByText,
    AttendeeCard,
    NameContainer,
    AvatarWrapper,
    MainContainer,
    InfoContainer,
    DateContainer,
    AttendeesTitle,
    CardsContainer,
    PhotosContainer,
    HostedContainer,
    CommentsWrapper,
    DetailsContainer,
    TopMainContainer,
    EventImageWrapper,
    LocationContainer,
    TopInnerContainer,
    AttendeesContainer,
    BottomMainContainer,
    BottomInnerContainer,
} from "./styles";

function Event() {
    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();

    const { event, isLoading } = useGetEventById(id);

    console.log(event)

    useEffect(() => {
        event ? dispatch(setPage(event.title)) : dispatch(setPage('Event'));
    }, [dispatch]);


    if (!event || isLoading) {
        return <div>Loading...</div>;
    }

    const { title, host, category, description, imageUri, comments, attendees, startDate, address, gallery } = event;

    return (
        <MainContainer>
            <TopMainContainer>
                <TopInnerContainer>
                    <Title>{categoryIcon[category]}{title}</Title>
                    <HostedContainer>
                        <AvatarWrapper>
                            <Avatar size={50} name={`${host.firstName} ${host.lastName}`} imageUri={host.imageUri} />
                        </AvatarWrapper>
                        <NameContainer>
                            <HostedByText>Hosted by</HostedByText>
                            <HostedBy>{`${host.firstName} ${host.lastName}`}</HostedBy>
                        </NameContainer>
                    </HostedContainer>
                </TopInnerContainer>
            </TopMainContainer>
            <BottomMainContainer>
                <BottomInnerContainer>
                    <DetailsContainer>
                        <EventImageWrapper>
                            <EventImage src={`${Url.StaticImages}${imageUri}`} alt={title} />
                        </EventImageWrapper>
                        <Description>
                            {description}
                        </Description>
                        <AttendeesContainer>
                            <AttendeesTitle>
                                Attendees ({attendees.length})
                            </AttendeesTitle>
                            <CardsContainer>
                                {
                                    attendees.slice(0, 4).map((attendee, index) => (
                                        <AttendeeCard key={index}>
                                            <Avatar size={75} name={attendee.firstName} imageUri={attendee.imageUri} />
                                            <AttendeeName>{`${attendee.firstName.split(" ")[0]}`}</AttendeeName>
                                            <AttendeeRole>{host.id === attendee.id ? 'Host' : 'Member'}</AttendeeRole>
                                        </AttendeeCard>
                                    ))
                                }
                                {
                                    attendees.length >= 5 && (
                                        <AttendeeCard>
                                            <Avatar size={75} name={'+5'} imageUri={null} showFullName={true} />
                                            <AttendMore>+5 more</AttendMore>
                                        </AttendeeCard>
                                    )
                                }
                            </CardsContainer>
                        </AttendeesContainer>
                        <PhotosContainer>
                            <PhotosTitle>
                                Photos ({gallery.length})
                            </PhotosTitle>
                            <CardsContainer>
                                {
                                    gallery.map((photo, index) => (
                                        <Photo key={index} src={`${Url.StaticImages}${photo}`} />
                                    ))
                                }
                            </CardsContainer>
                        </PhotosContainer>
                    </DetailsContainer>
                    <InfoContainer>
                        <DateContainer>
                            <FaClock />
                            <Date>{DateUtils.formatDate(startDate)}</Date>
                        </DateContainer>
                        <LocationContainer>
                            <FaLocationDot />
                            <Location>
                                {address}
                            </Location>
                        </LocationContainer>
                        <MapWrapper>
                            <EventMap event={event} />
                        </MapWrapper>
                    </InfoContainer>
                </BottomInnerContainer>
            </BottomMainContainer>
            <CommentsWrapper>
                <Comments comments={comments} />
            </CommentsWrapper>
        </MainContainer >
    );
}

export default Event;