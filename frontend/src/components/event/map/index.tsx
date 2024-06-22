import { Map } from "@vis.gl/react-google-maps";
import { Event } from "../../../types/event-types";
import { InfoWindowMarker } from "../../info-window-marker";

interface EventMapProps {
    event: Event
}

function EventMap(props: EventMapProps) {
    const { event } = props;

    return (
        <Map
            mapId={'bf51a910020fa25c'}
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: event.lat, lng: event.lng }}
            defaultZoom={13}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        >
            <InfoWindowMarker
                title={event.title}
                event={event}
                position={{
                    lat: event.lat,
                    lng: event.lng
                }}
            />
        </Map>
    )
}

export default EventMap;