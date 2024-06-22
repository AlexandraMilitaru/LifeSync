import cron from 'node-cron';
import EmailUtils from '../utils/email-utils';
import EventService from "./event-service";

class CronJobService {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    // async setup(email: string) {
    //     cron.schedule('* * * * *', async () => {
    //         console.log('Checking for upcoming events within one hour on every minute');
    //         const events = await this.eventService.getAllNextHour();
    //         await Promise.all(events.map(event => EmailUtils.sendEventReminder(email, event)));
    //     });
    // };
}

export default CronJobService;