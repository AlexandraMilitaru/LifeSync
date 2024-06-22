import EventService from "./event-service";

class StatisticsService {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    async getTimeSpentPerDay() {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        const events = await this.eventService.getAllExtended();

        const eventsInMonth = events.filter(event =>
            event.startDate.getMonth() === month && event.startDate.getFullYear() === year
        );

        const timeSpentPerDay: Record<string, number> = {};

        eventsInMonth.forEach(event => {
            const start = event.startDate;
            const end = event.endDate;

            let currentDate = new Date(start.toISOString());
            currentDate.setHours(0, 0, 0, 0);

            while (currentDate <= end) {
                const currentDateKey = currentDate.toISOString().split('T')[0];
                if (!timeSpentPerDay[currentDateKey]) {
                    timeSpentPerDay[currentDateKey] = 0;
                }

                const nextDay = new Date(currentDate);
                nextDay.setDate(nextDay.getDate() + 1);

                const timeTillEndOfDay = Math.min(nextDay.getTime(), end.getTime()) - currentDate.getTime();

                timeSpentPerDay[currentDateKey] += timeTillEndOfDay;

                currentDate = nextDay;
            }
        });

        const results = Object.entries(timeSpentPerDay).map(([day, time]) => ({
            day,
            hours: (time / (1000 * 60 * 60)) > 24 ? 24 : time / (1000 * 60 * 60)
        }));

        const resultsOrdered = results.sort((a, b) => a.day.localeCompare(b.day));

        return resultsOrdered;
    }

    async getTotalExpensesPerMonth() {
        const now = new Date();
        const year = now.getFullYear();

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const expensesPerMonth = monthNames.map(month => ({ month, expenses: 0 }));

        const events = await this.eventService.getAllExtended();
        const eventsInYear = events.filter(event => event.startDate.getFullYear() === year);

        eventsInYear.forEach(event => {
            const monthIndex = event.startDate.getMonth();
            expensesPerMonth[monthIndex].expenses += event.spent;
        });

        return expensesPerMonth;
    }

    async getNumberOfEventsPerCategory() {
        const events = await this.eventService.getAllExtended();

        const eventsPerCategory = events.reduce((acc, event) => {
            const categoryName = event.category.name;

            if (!acc[categoryName]) {
                acc[categoryName] = 0;
            }

            acc[categoryName]++;

            return acc;
        }, {} as Record<string, number>);

        const categoryEventsArray = Object.entries(eventsPerCategory).map(([category, events]) => ({
            name: category,
            events: events
        }));

        categoryEventsArray.sort((a, b) => b.events - a.events);

        return categoryEventsArray;
    }
}

export default StatisticsService;