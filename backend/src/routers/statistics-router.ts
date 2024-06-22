import { Router } from "express";
import { statisticsController } from "../controllers";

const router: Router = Router();

const {
    getTimeSpentPerDay,
    getTotalExpensesPerMonth,
    getNumberOfEventsPerCategory
} = statisticsController;

router.get("/get-time-spent-per-day", getTimeSpentPerDay);
router.get("/get-total-expenses-per-month", getTotalExpensesPerMonth);
router.get("/get-number-of-events-per-category", getNumberOfEventsPerCategory);

export default router;
