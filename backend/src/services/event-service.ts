// import haversine from "haversine-distance";
import EventMapper from "../exceptions/mappers/event-mapper";
import EventRepository from "../repositories/event-repository";
import GeocodingService from "./geocoding-service";
import EventAttendeeService from "./event-attendee-service";
import { EventCreateServiceDto } from "../types/event-types";

class EventService {
    private geocodingService: GeocodingService;
    private eventAttendeeService: EventAttendeeService;
    private eventRepository: EventRepository;

    constructor(
        geocodingService: GeocodingService,
        eventAttendeeService: EventAttendeeService,
        eventRepository: EventRepository
    ) {
        this.geocodingService = geocodingService;
        this.eventAttendeeService = eventAttendeeService;
        this.eventRepository = eventRepository;
    }

    async create(data: EventCreateServiceDto) {
        const address = await this.geocodingService.getDetailsByCoords(parseFloat(data.lat), parseFloat(data.lng));

        const { lat, lng, spent, ...rest } = data;

        const createdEvent = await this.eventRepository.create({
            ...rest,
            address,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            spent: parseFloat(spent),
            startDate: new Date(rest.startDate),
            endDate: new Date(rest.endDate)
        });

        await this.eventAttendeeService.create({ eventId: createdEvent.id, memberId: data.hostId });
    }

    async getById(id: string) {
        const event = await this.eventRepository.findByIdExtended(id);

        if (!event) {
            return null;
        }

        return EventMapper.repoDetailsToServiceDetails(event);
    }

    async getAllExtended() {
        return this.eventRepository.findAllExtended();
    }

    async getAllExtendedByDate(date: Date) {
        const events = await this.eventRepository.findAllByDateExtended(date);
        return events.map(event => EventMapper.repoDetailsToServiceDetails(event));
    }

    async getAllNextHour() {
        return this.eventRepository.findAllByLastHour();
    }
}

export default EventService;