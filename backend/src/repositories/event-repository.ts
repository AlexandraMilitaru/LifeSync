import { PrismaClient } from '@prisma/client';
import { EventCreateRepoDto } from '../types/event-types';

class EventRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: EventCreateRepoDto) {
        return this.client.event.create({ data });
    }

    async findAll() {
        return this.client.event.findMany();
    }

    async findByAttendeeId(attendeeId: string) {
        return this.client.event.findMany({
            where: {
                eventAttendees: {
                    some: {
                        memberId: attendeeId
                    }
                }
            },
            include: {
                host: {
                    include: {
                        user: true
                    }
                },
                comments: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                },
                eventAttendees: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        });
    }

    async findAllExtended() {
        return this.client.event.findMany({
            include: {
                host: {
                    include: {
                        user: true
                    }
                },
                category: true,
                comments: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                },
                eventAttendees: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        });
    }

    async findAllByDateExtended(date: Date) {
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999);

        return this.client.event.findMany({
            include: {
                host: {
                    include: {
                        user: true
                    }
                },
                category: true,
                comments: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                },
                eventAttendees: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            },
            where: {
                startDate: {
                    gte: startDate,
                    lte: endDate
                },
                endDate: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
    }

    async findAllByLastHour() {
        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        return this.client.event.findMany({
            where: {
                startDate: {
                    lte: now
                },
                endDate: {
                    gte: oneHourAgo
                }
            }
        });
    }

    async findByIdExtended(id: string) {
        return this.client.event.findUnique({
            where: { id },
            include: {
                host: {
                    include: {
                        user: true
                    }
                },
                category: true,
                comments: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                },
                eventAttendees: {
                    include: {
                        member: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        });
    }

    async findById(id: string) {
        return this.client.event.findUnique({ where: { id } });
    }

    async deleteById(id: string) {
        return this.client.event.delete({ where: { id } });
    }
}

export default EventRepository;
