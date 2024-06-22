import {
    Map,
    Marker,
    MapMouseEvent
} from '@vis.gl/react-google-maps';

interface CreateEventMapProps {
    setMarkers: (markers: google.maps.LatLngLiteral[]) => void;
    markers: google.maps.LatLngLiteral[];
}

const CreateEventMap = (props: CreateEventMapProps) => {
    const { markers, setMarkers } = props;

    const handleMapClick = (event: MapMouseEvent) => {
        console.log(event);
        event.detail.latLng && setMarkers([...markers, event.detail.latLng]);
    };

    const handleMarkerClick = (index: number) => {
        const newMarkers = [...markers];
        newMarkers.splice(index, 1);
        setMarkers(newMarkers);
    }

    return (
        <Map
            mapId={'bf51a910020fa25a'}
            style={{ width: '100%' }}
            defaultZoom={3}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            gestureHandling={'greedy'}
            onClick={handleMapClick}
        >
            {markers.map((position, index) => (
                <Marker
                    key={index}
                    position={position}
                    onClick={() => handleMarkerClick(index)}
                />
            ))}
        </Map>
    )
}

export default CreateEventMap;