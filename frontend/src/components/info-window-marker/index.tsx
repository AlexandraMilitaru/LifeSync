import DateUtils from '../../utils/date-utils';
import { Event } from '../../types/event-types';
import {
    Fragment,
    useState
} from 'react';
import {
    Text,
    Title,
    Container,
    MarkerImage
} from './styles';
import {
    InfoWindow,
    AdvancedMarker,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { Url } from '../../enums/url-enum';

interface InfoWindowMarkerProps {
    event: Event;
    title: string;
    position: google.maps.LatLngLiteral;
}

export const InfoWindowMarker = (props: InfoWindowMarkerProps) => {
    const { event, title, position } = props;

    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();

    const markerIcon = event.imageUri ? {
        url: `${Url.StaticImages}${event.imageUri}`,
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    } : undefined;

    return (
        <Fragment>
            <AdvancedMarker
                ref={markerRef}
                title={title}
                onClick={() => setInfowindowOpen(true)}
                position={position}
            >
                <MarkerImage src={`${Url.StaticImages}${event.imageUri}`} width={32} height={32} />
            </AdvancedMarker>
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={300}
                    onCloseClick={() => setInfowindowOpen(false)}
                >
                    <Container>
                        <Title>{event.title}</Title>
                        <Text>{event.description}</Text>
                        <Text>
                            {DateUtils.formatDate(event.startDate)} - {event.endDate ? DateUtils.formatDate(event.startDate) : 'Ongoing'}
                        </Text>
                    </Container>
                </InfoWindow>
            )}
        </Fragment>
    );
};