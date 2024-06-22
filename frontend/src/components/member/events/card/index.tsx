import EventsMap from "./map";
import DateUtils from "../../../../utils/date-utils";
import { Url } from "../../../../enums/url-enum";
import { Event } from "../../../../types/event-types";
import { categoryIcon } from "../../../../constants/category-constants";
import {
    Title,
    Image,
    SpentText,
    SpentValue,
    MapWrapper,
    Description,
    ImageWrapper,
    GalleryImage,
    MainContainer,
    DateContainer,
    SpentContainer,
    InnerContainer,
    UnderlineEffect,
    ImagesContainer,
    GalleryContainer
} from "./styles";

interface EventCardProps extends Event { }

function EventCard(props: EventCardProps) {
    const { id, title, description, startDate, endDate, spent, imageUri, gallery, category, lat, lng } = props;

    return (
        <MainContainer>
            <Title to={`${Url.Event}${id}`}>
                {categoryIcon[category]}{title}
                <UnderlineEffect />
            </Title>
            <DateContainer>
                {endDate ? DateUtils.formatDate(startDate) + ' - ' + DateUtils.formatDate(endDate) : DateUtils.formatDate(startDate)}
            </DateContainer>
            <SpentContainer>
                <SpentText>Spent:</SpentText>
                <SpentValue>{spent}$</SpentValue>
            </SpentContainer>
            <Description>{description}</Description>
            <InnerContainer>
                <ImagesContainer>
                    <ImageWrapper>
                        <Image src={`${Url.StaticImages}${imageUri}`} alt={title} />
                    </ImageWrapper>
                    <GalleryContainer>
                        {gallery.map((imageUri, index) => (
                            <GalleryImage key={index} src={`${Url.StaticImages}/${imageUri}`} alt={title} />
                        ))}
                    </GalleryContainer>
                </ImagesContainer>
                <MapWrapper>
                    <EventsMap markers={[{ lat, lng }]} />
                </MapWrapper>
            </InnerContainer>
        </MainContainer>
    );
}

export default EventCard;