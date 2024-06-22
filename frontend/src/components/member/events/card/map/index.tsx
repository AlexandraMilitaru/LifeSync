import {
    Map,
    AdvancedMarker
} from '@vis.gl/react-google-maps';

interface EventsMapProps {
    markers: google.maps.LatLngLiteral[];
}

const EventsMap = (props: EventsMapProps) => {
    const { markers } = props;

    return (
        <Map
            mapId={'bf51a910020fa25a'}
            style={{ width: '100%' }}
            defaultZoom={12}
            defaultCenter={{ lat: markers[0].lat, lng: markers[0].lng }}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        >
            {markers.map((position, index) => (
                <AdvancedMarker
                    key={index}
                    position={position}
                />
            ))}
        </Map>
    )
}

export default EventsMap;