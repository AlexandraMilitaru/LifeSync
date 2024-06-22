import { EventAttendeeCreateRepoDto } from '../types/event-attendee-types';
import {
    PrismaClient
} from '@prisma/client';

class EventAttendeeRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: EventAttendeeCreateRepoDto) {
        return this.client.eventAttendee.create({ data });
    }

    async getByEventIdAndMemberId(eventId: string, memberId: string) {
        return this.client.eventAttendee.findFirst({
            where: {
                eventId,
                memberId
            }
        });
    }
}

export default EventAttendeeRepository;
