import ConflictException from "../exceptions/conflict-exception";
import EventAttendeeRepository from "../repositories/event-attendee-repository";
import { EventAttendeeCreateServiceDto } from "../types/event-attendee-types";

class EventAttendeeService {
    private eventAttendeeRepository: EventAttendeeRepository;

    constructor(
        eventAttendeeRepository: EventAttendeeRepository
    ) {
        this.eventAttendeeRepository = eventAttendeeRepository;
    }

    async create(data: EventAttendeeCreateServiceDto) {
        const eventAttendee = await this.eventAttendeeRepository.getByEventIdAndMemberId(data.eventId, data.memberId);

        if (eventAttendee) {
            throw new ConflictException('You have already attended this event!');
        }

        await this.eventAttendeeRepository.create(data);
    }
}

export default EventAttendeeService;