import asyncHandler from "express-async-handler"
import StatisticsService from "../../services/statistics-service";

class StatisticsController {
    private statisticsService: StatisticsService;

    constructor(statisticsService: StatisticsService) {
        this.statisticsService = statisticsService;
    }

    getTimeSpentPerDay = asyncHandler(async (_req, res) => {
        const timeSpentPerDay = await this.statisticsService.getTimeSpentPerDay();
        res.json({ timeSpentPerDay });
    })

    getTotalExpensesPerMonth = asyncHandler(async (_req, res) => {
        const totalExpensesPerMonth = await this.statisticsService.getTotalExpensesPerMonth();
        res.json({ totalExpensesPerMonth });
    })

    getNumberOfEventsPerCategory = asyncHandler(async (_req, res) => {
        const numberOfEventsPerCategory = await this.statisticsService.getNumberOfEventsPerCategory();
        res.json({ numberOfEventsPerCategory });
    })
}

export default StatisticsController;